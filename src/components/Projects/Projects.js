import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecs from "../../Assets/Projects/ecs.png";
import cloudwatch from "../../Assets/Projects/cloudwatch.png"
import appsync from "../../Assets/Projects/appsync.png"

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
              isBlog={false}
              imgPath={ecs}
              title="AWS ECS Terraform Accelerator"
              description="Designed and developed a ready-to-use terraform module that creates CI/CD pipeline in AWS for any multi-tier application using ECS."
       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
              isBlog={false}
              imgPath={cloudwatch}
              title="AWS Cloudwatch Terraform Accelerator"
              description="Ready to deploy infrastructure code for implementing cloudwatch dashboards."
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
              isBlog={false}
              imgPath={appsync}
              title="AWS Appsync Accelerator"
              description="Fully functional blogging web application made using the AWS Amplify framework"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
