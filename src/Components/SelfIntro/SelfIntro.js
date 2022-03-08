import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/unnamed.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
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
              Me apaixonei pela programação. E por tudo que ela tem à me oferecer e eu oferecer à ela.
              Aprendi algumas coisinhas ao longo desses últimos meses estudando na integra..
              <br />
              <br /> Estou fazendo curso introdutório de lógica de programação do Leonardo Leitão na Udemy, e também to 
              <br />
               Já fiz alguns bootcamps também na DIO (JS), e participei de um intensivo na Multinacional Globant (Salesforce Apex).
              <br />
              <br />
              Minhas áreas de interesse atualmente, são &nbsp;
                <b className="purple">JAVASCRIPT, HTML e CSS.  &nbsp;</b>
                <b>
                 E principalmente, poder desenvolver de verdade em um  &nbsp;<b className="purple">estágio</b>.
                 </b>
              <br />
              <br />
              E sempre que sobra um tempinho, eu coloco
              <b className="purple"> minha paixão</b> por filmes de princesas da Disney, em dia.👸🏻
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
