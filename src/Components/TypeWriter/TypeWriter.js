import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
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