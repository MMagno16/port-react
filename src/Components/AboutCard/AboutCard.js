import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos! Meu nome é <span className="purple">Marianna Magno Osório</span>.
            Sou estudante de Análise e desenvolvimento de sistemas na<span className="purple">  Uninter</span>.
            <br />
            
            <br />Comecei estudar em agosto/21. Atualmente estou no segundo semestre, com previsão de termino em março/24.<br /> <br />
           <br />
            
            ⚡ Na faculdade, utilizamos no primeiro semestre, a linguagem Python para desenvolver as atividades solicitadas.
            <br />
           <br />
            <br />
            ⚡ No segundo semestre, comecei a desenvolver com a linguagem Java.
            <br />
           <br />
            <br />
            ⚡ E particularmente estou estudando a lingaguem JS, juntamente com HTML e CSS, focando em desenvolvimento Back End.
 
          </p>
          
              </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;