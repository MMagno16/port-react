import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

import slideshow from "../Assets/slideshow.png";
import semaforo from "../Assets/semaforo.png";
import lampada from "../Assets/lampada.png";
import formulario from "../Assets/formulario.png";
import APIrest from "../Assets/api-rest.png";
import doAmor from "../Assets/doAmor.png";
import atvextensionista from "../Assets/atvextensionista.png";
import port1 from "../Assets/port 1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My recent <strong className="purple"> projects</strong>
        </h1>
        <p style={{ color: "white" }}></p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={APIrest}
              title="API REST com Node.JS e MongoDB!"
              description="API baseada no framework EXPRESS para tratar as requisições e enviar as respostas no endpoints;
              Utilizei o MongoDB como banco, porém com a ODM Mongoose;
              Realizei as operações no MongoDB Atlas;
              As respostas são baseadas em Json, retornando junto o status correto.
              Instalei também o pacote Nodemon para atualizar o código em tempo real.
              E usei o Postman para testar da API."
              link="https://github.com/MMagno16/API-REST"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={atvextensionista}
              title="Atividade Extensionista II - Faculdade Uninter"
              description=" Ideia do projeto:
              Criar um formulário simples, onde os alunos interessados possam se cadastrar para as aulas.
              Objetivo:
              Colocar em prática alguns aprendizados sobre formulários.
              Também utilizei neste projeto uma imagem de fundo fixa.
              🛠 Tecnologias utilizadas:
              HTML5
              CSS3
              🎨 Design
              Visual
              Cores
              Fonte
              📝 Coisas novas que aprendi:
              Mudar a cor do campo quando clicado
              💬 Sugestões:
              Fico aberta a sugestões de melhoria e ideias, caso você tenha alguma basta me enviar uma mensagem."
              link="https://github.com/MMagno16/atvextensionistaII.git"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={port1}
              title="Portfólio - Alura "
              description="Nono projeto criado na imersão dev_ da Alura. Aqui, nos auxiliaram o uso do Figma, como base, para transformar o design em código.
              (O que foi bem banaca!)Entendi melhor, como funciona HTML e CSS.
              Estruturei o portfólio com HTML, utilizando todas as tags necessárias pra isso. E estelizei o portfólio com CSS, inserindo os seletores, as propriedades
              e os valores necessários para isso."
              link="https://github.com/MMagno16/aula09"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={doAmor}
              title="Atividade Extensinista I - Faculdade Uninter"
              description="Projeto DoAmor foi desenvolvido para Atividade Extensionista I da faculdade Uninter, onde criei um site
              para juntar todas as ONG's que aceitam arrecadações para futuras doações de roupas, brinquedos, livros e entre outras opções. A intenção do projeto foi juntar essas ONG's em uma única página,
              para que se torne de fácil busca, quando alguém se interessar em fazer uma doação; Podendo escolher qual ONG mais se indentifica.
              Usei nesse projeto, HTML e CSS puro, importei a fonte de minha preferência e brinquei bastante com as infinitas possibilidades
              de deixar um site mais dinâmico e bonito. Aceito sugestões e ideias para melhorar a estrutura do mesmo! =)"
              link="https://github.com/MMagno16/atividade-extensionista-I.git"
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
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={lampada}
              title="Lâmpada"
              description="Criei uma lâmpada com três ações: ligar, desligar e quebrar. Para isso, interagi com elementos HTML, eventos e utilização de funções."
              link="https://github.com/MMagno16/lampada"
            />
          </Col>
          
          
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
