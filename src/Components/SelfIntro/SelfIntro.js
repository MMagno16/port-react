import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/unnamed2.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function SelfIntro() {
  return (
    <Container>
      <Container
        fluid
        className="home-about-section  container-fluid"
        id="about"
      >
        <Row>
          <Col md="8" className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let <span className="purple"> me</span> introduce myself!
            </h1>
            <p className="home-about-body">
              Technology introduced itself to me a while ago. And when I decided
              to study programming, I fell in love! And, of course, for
              everything she has to offer me and me to offer her.
              <br />
              <br /> For the past 8 months, I have often studied many hours a
              day. And about 3 months ago, I got my first internship, at
              Avanade.
              <br></br>
              <br />
              In the last 8 months, I have studied many hours a day. <br />
              And about 3 months ago, I got my first internship, at Avanade.{" "}
              <br /> It's been an incredible experience. I am updating daily. I
              am developing my technical skills and my personal skills. Learning
              new languages. Meeting wonderful people.
              <br />
              All amazing!!
              <br />
              <br />
              My area of interest is currently &nbsp;
              <b className="purple">back end. &nbsp;</b>
              <b>
                <br></br> And my biggest focus at the moment, is to become a
                Junior in this incredible company, which is &nbsp;
                <b className="purple">Avanade</b>.
              </b>
              <br />
              <br />
              And whenever I have a little time,
              <b className="purple"> I put my other passion for</b> Disney
              princess movies up to date.👸🏻
            </p>
          </Col>
          <Col md="4" className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
      <Col md={12} className="home-about-social">
        <h1>Find me here </h1>

        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/MMagno16"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>

          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/marianna-magno/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </Col>
    </Container>
  );
}
export default SelfIntro;
