import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CGI Intern"
              isConfidentiel={true}
              description="Designed, developed, and deployed the OBP application for Société Générale, using Spring Boot (REST APIs, Spring Data, Spring Batch) for the backend and React + Redux for the frontend with SgSignIn authentication. Managed CI/CD and deployments via DevOps Manager and JFrog across multiple environments, following Agile methodology with regular demos and GitHub-based collaboration."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              isConfidentiel={true}
              title="SBS Intern"
              description="Developed a commercial proactivity dashboard for bank branch managers using a Spring Boot microservices architecture, Angular frontend, and MongoDB database. Contributed to backend API design, frontend integration, and performance optimization while working in an Agile environment with code versioning and testing through Maven and Postman."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="GAN Configurator (with ALTEN)"
              ghLink="https://github.com/MahmoudDkhissi/projet-long-alten"
              description="Desktop application built with Python (Tkinter) that allows users to design, configure, and train Generative Adversarial Networks (GANs) without coding. Provides a graphical interface to customize generator/discriminator architectures, tune hyperparameters, and launch training sessions"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ATS – Applicant Tracking System"
              description="Full-stack recruitment app with Spring Boot, React, and Redux, featuring authentication and role management via Spring Security.
Containerized with Docker and automated deployment via GitHub Actions CI/CD."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="CI/CD Automation Pipeline"
              description="End-to-end CI/CD pipeline designed to automate the build, test, and deployment process of a sample Java/React application. Built using Jenkins, Docker, and GitHub Actions, it automates container builds, runs unit tests, and deploys to a Kubernetes (Minikube) cluster."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Banking Service – Web Services Comparison"
              description="Developed a Java-based banking service comparing REST (JAX-RS, Spring REST, Spring Data REST) and SOAP (JAX-WS) architectures for account management."
              ghLink="https://github.com/MahmoudDkhissi/SOAP-REST-SpringBoot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
