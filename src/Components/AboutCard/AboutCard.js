import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone! My name is {" "}
            <span className="purple">Marianna Magno Osório</span>. I'm a systems analysis and development student at 
            <span className="purple"> Uninter</span>.
            <br />
            <br />
            I started studying in August/21. I'm currently in my third semester,
             scheduled to end in March/24.
            <br /> <br />
            <br />
            ⚡ Student of Systems Analysis and Development, with training for
            03/2024. Assoc, Full-Stack Developer at Avanade, with skills in
            HTML, CSS, JS, REACT and NODE.JS Every day more passionate and
            dedicated to coding. ♡ <br /> I have always worked in the
            administrative area. I have experience in strategic planning and
            administration, human resources management and development,
            financial control, customer relations, and sales and collections
            management. <br />
            I apply discipline, respect, and humility in my daily life, as
            pillars of my moral development. I have a quick adaptation to
            different environments, and I can get used to new routines.
            <br />
            <br />
            <br />
            ⚡Estudante de Análise e desenvolvimento de sistemas, com formação
            para 03/2024. Desenvolvedora Full-Stack associado na Avanade, com
            habilidades em HTML, CSS, JS, REACT e NODE.JS. Cada dia mais
            apaixonada e dedicada à programação.♡ <br /> Sempre atuei na área
            administrativa. Tenho experiência em planejamento e administração
            estratégica, gestão e desenvolvimento de recursos humanos, controle
            financeiro, relacionamento com o cliente e gestão de vendas e
            cobranças. <br />
            Aplico a disciplina, o respeito e a humildade no meu dia-a-dia, como
            pilares do meu desenvolvimento moral. Possuo rápida adaptação em
            ambientes diversos, e tenho facilidade de me habituar com novas
            rotinas. 
            <br />
            <br />
            <br />⚡ Knowledge - HTML | CSS | JS | Rect | Node.JS <br />⚡
            Conhecimento - HTML | CSS | JS | Rect | Node.JS
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
