import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./address.css";
import call from "../../Assets/contact.svg";

import { AiFillGithub, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Address() {
  return (
    <Container>
      <Row>
        <Col md={12} className="address"></Col>

        <Col md={12} className="contact-image-container">
          <img className="contact-image" src={call} alt="" />{" "}
        </Col>
        <Row>
          <Col md={6} className="contact-address">
            <h4>Phone</h4>
            <p>
              {" "}
              <AiOutlineWhatsApp /> +55 13 99745 0359
            </p>
          </Col>
          <Col md={6} className="contact-address">
            <h4>E-mail</h4>
            <p>
              <AiOutlineMail /> mmagnosorio@gmail.com
            </p>
          </Col>
        </Row>

        <Col md={12} className="home-about-social">
          <h1>Contacts</h1>
          <span>
            I'm available on almost every social network. You can send me a
            message, and I will respond within 24 hours.
          </span>
          <br />
          <p>
            Feel free to get in touch <span className="purple"> with me.</span>
          </p>
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
      </Row>
    </Container>
  );
}

export default Address;
