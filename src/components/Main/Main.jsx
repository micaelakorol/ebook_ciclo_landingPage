import React from "react";
import { BtnMain, ContainerPrincipal, Subtitle, TitleMain } from "../../styled-componets/Main";
import cohete from '../../assets/cohete.svg'
import Content from "./Content";
const Main = () => {
  return (
    <ContainerPrincipal>
        <img src={cohete} alt="" />
      <TitleMain>Este es el titulo principal, contenido contenido</TitleMain>
      <Subtitle>Este es un subtitulo con x información sobre el ebook</Subtitle>
      <BtnMain>Button</BtnMain>
      <Content />
    </ContainerPrincipal>
  );
};

export default Main;
