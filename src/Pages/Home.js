import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/homepic.png";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

import Particle from "../Components/Particles/Particle";
import SelfIntro from "../Components/SelfIntro/SelfIntro";
import TypeWriter from "../Components/TypeWriter/TypeWriter";

function Home() {
  return (
    // <Container fluid className="home-section" id="home">
    <Container>
      <Particle />

      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 20 }} className="heading">
              Hello World!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name ">
              {" "}
              Welcome to
              <strong className="main-name br"> my portfolio.</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
              <TypeWriter />
            </div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <img src={homeLogo} alt="home pic" className="img-fluid" />
          </Col>
        </Row>

        <SelfIntro />
      </Container>
    </Container>
  );
}

export default Home;
