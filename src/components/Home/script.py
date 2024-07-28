import pymongo
from pymongo import UpdateOne
import pandas as pd

# Connexion à MongoDB
client = pymongo.MongoClient("mongodb+srv://intraday:intraday@dev.vqjrrab.mongodb.net/")  # Remplacez par votre URI MongoDB
db = client['DEV']  # Remplacez par le nom de votre base de données
collection = db['TEST']  # Remplacez par le nom de votre collection
dct_collection = db['DCT']  # Nouvelle collection pour traquer les opérations débit/crédit


# Récupération des documents
documents = list(collection.find({}))

# Vérifiez si des documents sont récupérés
if not documents:
    print("Aucun document trouvé dans la collection.")
else:
    # Convertir les données en DataFrame pour un traitement plus facile
    df = pd.DataFrame(documents)

    # Trier les documents par compte et par ordre chronologique
    df['STEP'] = pd.to_datetime(df['STEP'])
    df = df.sort_values(by=['ACCOUNT', 'STEP'])

    # Initialiser une liste pour stocker les opérations de mise à jour
    updates = []

    debit_operations = []
    credit_operations = []


    # Parcourir chaque transaction et mettre à jour le solde disponible
    for account, group in df.groupby('ACCOUNT'):
        previous_balance = None
        seen_operation_refs = set()  # Traquer les operation_ref déjà vus pour ce compte

        for index, row in group.iterrows():
            operation_ref = row['OPERATION_REF']
            
            # Si operation_ref a déjà été vu, sauter cette transaction
            if operation_ref in seen_operation_refs:
                updates.append(
                    UpdateOne(
                        {'_id': row['_id']},
                        {'$set': {'DISPONIBLE': previous_balance}}
                    )
                )
                continue
            sign = row['SIGN']
            amount = row['DISPONIBLE']

            '''
            if previous_balance is None:
                # Première transaction du compte
                if sign == 'D':
                    new_balance = row['DISPONIBLE'] - amount
                elif sign == 'C':
                    new_balance = row['DISPONIBLE'] + amount
            else:
                # Transactions suivantes
                if sign == 'D':
                    new_balance = previous_balance - amount
                elif sign == 'C':
                    new_balance = previous_balance + amount
            
            # Préparer l'opération de mise à jour pour MongoDB
            updates.append(
                UpdateOne(
                    {'_id': row['_id']},
                    {'$set': {'DISPONIBLE': new_balance}}
                )
            )
            '''


            # Vérifier si le solde précédent était positif et le nouveau solde est ≤ 0
            if previous_balance is not None and previous_balance >= 0 and amount < 0:
                debit_operations.append({
                    'ACCOUNT': account,
                    'OPERATION_REF': operation_ref,
                    'STEP': row['STEP'],
                    'SIGN': sign,
                    'DISPONIBLE': amount
                })
            if previous_balance is not None and previous_balance < 0 and amount >= 0:
                credit_operations.append({
                    'ACCOUNT': account,
                    'OPERATION_REF': operation_ref,
                    'STEP': row['STEP'],
                    'SIGN': sign,
                    'DISPONIBLE': amount
                })
           


            # Mettre à jour le solde disponible pour la prochaine itération
            previous_balance = amount
            seen_operation_refs.add(operation_ref)  # Marquer cette operation_ref comme vue


    # Appliquer les mises à jour en bulk dans MongoDB
    if updates:
        result = collection.bulk_write(updates)
        print(f"Documents mis à jour : {result.modified_count}")

    if debit_operations or credit_operations:
        dct_collection.insert_many(debit_operations + credit_operations)
        print(f"Opérations de débit/crédit insérées dans la collection DCT: {len(debit_operations) + len(credit_operations)}")



# Fermer la connexion
client.close()



