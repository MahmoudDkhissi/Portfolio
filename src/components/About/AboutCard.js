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
            I am a last year computer science engineering student at INP-ENSEEIHT specialized in Big Data.
            <br />
            I have a keen interest in Artificial Intelligence and data science, driven by the fascinating blend of applied mathematics, modeling, data analysis, and software engineering. My curiosity about science and new technologies continues to grow, fueling my dedication to expanding my knowledge and honing my skills.

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mahmoud</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
