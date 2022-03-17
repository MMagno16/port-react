import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Estudante de Análise e desenvolvimento de sistemas",
          "Procuro vaga de Estágio",
          "Oportunidade para desenvolver",
          "E que seja Home Office 😌😁",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;