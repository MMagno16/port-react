import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Components/Particles/Particle";
import Techstack from "../Components/TechStack/TechStack";

import Toolstack from "../Components/ToolStack/ToolStack";
import laptopImg from "../Assets/about.png";
import AboutCard from "../Components/AboutCard/AboutCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Who I <strong className="purple">am</strong> 
            </h1>
            <AboutCard/>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
        Developed  <strong className="purple">Skills </strong>
        </h1>
        
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools </strong> I use
        </h1>
               <Toolstack />
      </Container>
    </Container>
  );
}

export default About;