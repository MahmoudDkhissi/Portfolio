import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {BsGithub, BsLockFill} from "react-icons/bs";

function ProjectCards(props) {
    return (<Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{textAlign: "justify"}}>
                    {props.description}
                </Card.Text>
                {props.isConfidentiel ? <BsLockFill style={{ color: "red", fontSize: "1.2em" }} title="Confidentiel" /> : <Button variant="primary" href={props.ghLink} target="_blank">
                    <BsGithub/> &nbsp;
                    {props.isBlog ? "Blog" : "GitHub"}
                </Button>}

                {"\n"}
                {"\n"}


            </Card.Body>
        </Card>);
}

export default ProjectCards;
