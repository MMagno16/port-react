import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/unnamed.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function SelfIntro() {
  return (

    <Container>
      <Container fluid className="home-about-section  container-fluid" id="about">
        <Row>
          <Col md="8" className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Deixa <span className="purple"> eu</span> me apresentar
            </h1>
            <p className="home-about-body">
              Me apaixonei por programação.
              Aprendi algumas coisinhas ao longo desses últimos meses estudando de verdade..
              <br />
              <br />Já fiz alguns bootcamps também.
              <i>
                <b className="purple">  Como na DIO (C++ e JS) e na Globant (Salesforce Apex).</b>
              </i>
              <br />
              <br />
              Minhas áreas de interesse atualmente, são &nbsp;
              <i>
                <b className="purple">Javascript, HTML e CSS  &nbsp;</b>. E principalmente
                poder desenvolver tudo que aprendi em um  &nbsp;<b className="purple">estágio</b>.
              </i>
              <br />
              <br />
              E sempre que sobra um tempinho, eu coloco
              <b className="purple"> minha paixão</b> por filmes de princesas da Disney, em dia.💁‍♀️
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
        <h1>Me encontre aqui ↓</h1>

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
