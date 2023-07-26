import React from "react";
import {
  ContainerPrincipal,
  Subtitle,
  TitleMain,
} from "../../styled-componets/Main";
import cohete from "../../assets/cohete.svg";
import Content from "./Content";
import Me from "./Me";
import { linkHotmart } from "../../variables/var";
import Ancla from "../../reusable/Ancla";
const Main = () => {
  return (
    <ContainerPrincipal>
      <img src={cohete} alt="cohete" />
      <TitleMain>
        <mark>HTML Fundamental:</mark> Una guía desde cero
      </TitleMain>
      <Subtitle>
      <mark>HTML</mark> es la Puerta de entrada al mundo del desarrollo web. Este ebook,
        es especialmente introductorio y amigable para No Programadores y novatos.
        Comienza aprendiendo los Conceptos básicos.
      </Subtitle>
      <Ancla href={linkHotmart}>¡Comencemos!</Ancla>
      <Content />
      <Me />
    </ContainerPrincipal>
  );
};

export default Main;
