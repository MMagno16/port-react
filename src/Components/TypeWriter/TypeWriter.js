import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer at Avanade ",
          "Specializing in Back End",
          "In love with Disney princesses and Star Wars",
          "And long live home office 😌😁",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default TypeWriter;