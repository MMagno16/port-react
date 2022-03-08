import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";
import prPrincesas from "../Assets/projetoprincesas.png"
import slideshow from "../Assets/slideshow.png"
import semaforo from "../Assets/semaforo.png"
import lampada from "../Assets/lampada.png"
import formulario from "../Assets/formulario.png"
import calculadora from "../Assets/calculadora.png"
import conversor from "../Assets/conversor.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus projetos <strong className="purple"> recentes</strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão meus projetos recentes.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath={calculadora}
              title="Calculadora"
              description="Primeiro projeto criado na imersão dev_ da Alura. Criei uma calculadora média de IMC, basicamente de template string, operações e média, usando a linguagem HTMl, CSS e JS."              
              link="https://github.com/MMagno16/aula01"
            />
          </Col>
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath={conversor}
              title="Conversor de Moedas"
              description="Segundo projeto criado na imersão dev_ da Alura. Esse projeto é um conversor de moedas simples, onde colocamos o valor em dolar e ele converte para real. Utilizei funções que interagem com a tela;
              E exibi o resultado com innerHTML; Usando a linguagem JS, HTML e CSS."              
              link="https://github.com/MMagno16/aula02"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={lampada}
              title="Lâmpada"
              description="Criei uma lâmpada com três ações: ligar, desligar e quebrar. Para isso, interagi com elementos HTML, eventos e utilização de funções."              
              link="https://github.com/MMagno16/lampada"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={formulario}
              title="Formulário"
              description="Criei uma página web de formulário bem simples, apenas com HTML e CSS."              
              link="https://github.com/MMagno16/cadastroparadev"
            />
          </Col>

          
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath={prPrincesas}
              title="Princesas da Disney"
              description="Primeira aula de bootstrap do bootcamp da DIO. Onde aprendi criar uma página somente de HTML (com um pouquinho de Css). Nessa página, referenciei todas as princesas da Disney de 2022."  
              link="https://github.com/MMagno16/aula_bootstrap"

            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={slideshow}
              title="SlideShow"
              description="Criei um slideshow simples, com ações para retroceder e avançar. Utilizei no projeto alguns recursos do javascript, como por exemplo, funções do tipo arrow, template string, manipulação de elementos HTML."
              link="https://github.com/MMagno16/slideshow"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={semaforo}
              title="Semáforo"
              description="Nesse projeto, criei um semáforo com ações, para ligar cada uma das cores e também inseri a opção automático. Para isso utilizei recursos do javascript como ternário, funções do tipo arrow, funções armazenadas em objetos para criar a chamada dinâmica e temporizadores. Sempre que possível criando um código limpo e semântico."              
              link="https://github.com/MMagno16/semaforo"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
