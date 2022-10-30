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
import jogoadv from "../Assets/jogoadv.png"
import aluraflix from "../Assets/aluraflix.png"
import aluraflix2 from "../Assets/aluraflix2.png"
import tabelaclass from "../Assets/tabelaclass.png"
import supertrunfo from "../Assets/supertrunfo.png"
import supertrunfo2 from "../Assets/supertrunfo2.png"
import port1 from "../Assets/port 1.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        My recent <strong className="purple"> projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          -----------------------------------------------
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath={port1}
              title="Portfólio 1/2 - Alura "
              description="Nono projeto criado na imersão dev_ da Alura. Aqui, nos auxiliaram o uso do Figma, como base, para transformar o design em código.
              (O que foi bem banaca!)Entendi melhor, como funciona HTML e CSS.
              Estruturei o portfólio com HTML, utilizando todas as tags necessárias pra isso. E estelizei o portfólio com CSS, inserindo os seletores, as propriedades
              e os valores necessários para isso."              
              link="https://github.com/MMagno16/aula09"
            />
          </Col>
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath={supertrunfo2}
              title="Meu Super-Trunfo das Princesas 2"
              description="Oitavo projeto criado na imersão dev_ da Alura. Nesse projetinho, eu adicionei o campo imagem nos objetos com o caminho do gif e criei 
              uma função que exibe a carta do jogador após o sorteio das cartas e outra que exibe a carta da máquina. Adicionei a moldura da carta também. Escrevi o resultado na tela após o duelo das cartas
              informando se o jogador venceu ou perdeu a jogada."              
              link="https://github.com/MMagno16/aula08"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={supertrunfo}
              title="Meu Super-Trunfo das Princesas"
              description="Sétimo projeto criado na imersão dev_ da Alura. Nesse projeto criei as cartas do jogo e defini os atributos. Desenvolvi uma função para sortear uma carta para o jogador e outra para a máquina. 
              Fazendo, com que exiba os atributos das cartas na tela para o jogador obter o escolhido e comparar o mesmo, de ambas as cartas e definir um vencedor."        
              link="https://github.com/MMagno16/aula07"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={tabelaclass}
              title="Tabela Classificatória"
              description="Sexto projeto criado na imersão dev_ da Alura. Nesse projeto, removi o código estático do HTML. Criei um objeto no Javascript para cada jogador. Criei também uma função que receba
              um objeto como parâmetro para calcular os pontos, e exibir o objeto na página HTML; Criei uma função para adicionar vitória, outra para adicionar empate e uma última para adicionar derrota;
              Recalculei os pontos quando a vitória ou o empate for adicionado."            
              link="https://github.com/MMagno16/aula06"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={aluraflix2}
              title="AluraDisney"
              description="Quinto projeto criado na imersão dev_ da Alura. Nesse projeto, basicamente continuamos o que fizemos no projeto anterior(AluraFlix), integrando funções criadas 
              no JS com HTML, que está sendo exibido na tela. Condicionei a chamada da função adicionarFilmes a um clique em um botão na tela, para inseriro novos desenhos/filmes.
              Usei o JS também para acessar o que está sendo exibido na tela pra pegar os valores obtidos pelo usuário do getElementByI e o .value.
              Passei também as informações das funções que precisam funcionar, atraves de paramêtros. Utilizei o .endsWith() para verificar se o texto que será inserido na caixa
              de digitação, é o caracter determinado."
              link="https://github.com/MMagno16/aula05"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={aluraflix}
              title="AluraFlix"
              description="Quarto projeto criado na imersão dev_ da Alura. Onde criei um array com imagens de pôsters de alguns filmes que mais me identifico. 
              Aqui nesse projeto aprendemos a usar um array de filmes usando a sintaxe [];
              Utilizei também o método .push para inserir um novo elemento na lista, que nesse caso, é um novo filme na listaFilmes.
              Utilizei método .length, para descobrir a quantidade de elementos que tem no array. Usei a instrução for também, para percorrer todos os elementos da array;
              E por fim, montei a lógica do programa que vai iterar esta array de filmes e exibir cada um deles na tela, utilizando JS, HTML e CSS."
              link="https://github.com/MMagno16/aula04"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={jogoadv}
              title="Jogo de adivinhação!"
              description="Terceiro projeto criado na imersão dev_ da Alura. Esse projeto é um jogo de adivinhação simples, onde insiro um número aleatório no botão 'chutar', e ele me retorna
              a resposta de acordo com o sorteio do número. Utilizei funções que interagem com a tela; Usei if, else if, else para criar a lógica do botão. 
              Utilizei também o Math.random() para gerar números aleatórios. E exibi o resultado com innerHTML; Usando a linguagem JS, HTML e CSS."              
              link="https://github.com/MMagno16/aula03"
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
              imgPath={calculadora}
              title="Calculadora"
              description="Primeiro projeto criado na imersão dev_ da Alura. Criei uma calculadora média de IMC, basicamente de template string, operações e média, usando a linguagem HTMl, CSS e JS.            
              Onde dependendo do resultado, mostrar se a pessoa está acima do peso, ou não. E qual a sua média de acordo com a avaliação dos dados inseridos.
              Alterei o fundo da tela, colocando cores e fontes que mais achei legal.
              Analisamos as diferenças entre HTML, CSS e JavaScript. Aprendemos a declarar variáveis e manipular os valores armazenados, usando os tipos de variáveis, como texto e inteiro;
              E usei a função toFixed() para fixar a quantidade de casas decimais do resultado do valor inserido."
              link="https://github.com/MMagno16/aula01"
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
