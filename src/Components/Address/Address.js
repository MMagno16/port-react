import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./address.css";
import call from "../../Assets/contact.svg";

import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineWhatsApp,
  
  AiOutlineMail,
  AiFillYoutube,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Address() {
  return (
    <Container>
          <Row>
              <Col md={12} className="address">
              
              
              
              </Col>
     
            <Col md={12} className="contact-image-container">
              <img className="contact-image" src={call} alt="" />{" "}
              
            </Col>
           <Row> 
           <Col md={6} className="contact-address">

           <h4 >Telefone</h4> 
              
              <p>  <AiOutlineWhatsApp/> +55 13 997450359</p>
              </Col>
              <Col md={6} className="contact-address">
              <h4 >E-mail</h4> 
              <p>
                
                <AiOutlineMail/> mmagnosorio@gmail.com
              </p>
              </Col>

        </Row>

            <Col md={12} className="home-about-social">
              <h1>Contatos</h1>
              <span>
              Estou disponível em quase todas as redes sociais. 
              Você pode me enviar uma mensagem, que eu responderei dentro de 24 horas.
              </span>
              <br/>
              <p>
                Sintam-se à vontade para <span className="purple"> conectar-se </span>comigo.
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
