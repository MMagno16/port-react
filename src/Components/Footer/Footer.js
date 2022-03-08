import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css"

function Footer() {
  
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>2022</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Marianna Magno Osório</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          
            <li className="social-icons">
              <a
                href="https://github.com/MMagno16"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/marianna-magno/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              
            </li>
            <li className="social-icons">
            </li>
           
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;