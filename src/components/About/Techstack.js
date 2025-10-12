import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiReact,
    DiMongodb,
    DiJava,
    DiPostgresql, DiDocker, DiJenkins,
} from "react-icons/di";
import {
    SiSpringboot, SiKubernetes, SiAmazonaws,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiSpringboot />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJenkins />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAmazonaws/>
        </Col>


    </Row>
  );
}

export default Techstack;
