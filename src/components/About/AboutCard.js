import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mahmoud DKHISSI </span>
            <br />
            I am a Software Engineer specialized in Java, with experience in building robust and scalable applications.
            <br />
            I also have a solid understanding of DevOps practices, including automation, CI/CD, and deployment processes, allowing me to bridge the gap between development and operations.
            <br />
            I enjoy solving challenging problems, continuously improving my skills, and delivering high-quality software solutions.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, deploy with care !"{" "}
          </p>
          <footer className="blockquote-footer">Mahmoud</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
