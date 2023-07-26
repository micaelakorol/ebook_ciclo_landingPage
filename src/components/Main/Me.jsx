import React from "react";
import { TitleMain } from "../../styled-componets/Main";
import { AboutMe } from "../../styled-componets/Content";

const Me = () => {
  return (
    <>
      <TitleMain as="h2">
        ¿Quién está detrás de esta
        <mark> experiencia educativa?</mark>
      </TitleMain>
      <AboutMe>
        ¡Bienvenid@! Mi nombre es Micaela y soy la creadora de esta guía. Soy
        programadora en Ciclo marketing digital y Desarrollo. Mi deseo es que
        aproveches al máximo esta guía y sientas la misma emoción y satisfacción
        que yo experimenté cuando comencé mi viaje en el desarrollo web. Si
        tienes alguna pregunta o necesitas ayuda en cualquier momento, estaré
        encantada de apoyarte en tu camino hacia el dominio de HTML. 🚀
      </AboutMe>
    </>
  );
};

export default Me;
