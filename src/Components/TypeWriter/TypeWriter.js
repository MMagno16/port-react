import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer at Avanade ",
          "Specializing in Back End",
          "Jiu-Jitsu Purple Belt",
          "In love with Disney princesses and Star Wars ...",
          "And long live the home office 🖖",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default TypeWriter;