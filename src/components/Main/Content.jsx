import React from "react";
import {
  ContentMain,
  TitlePhoto,
  ContentDescription,
  List,
} from "../../styled-componets/Content";
import laptop from "../../assets/laptop.svg";
import { BtnMain } from "../../styled-componets/Main";
import EbookContent from "./EbookContent";

const Content = () => {
  return (
    <ContentMain>
      <img src={laptop} alt="laptop" className="laptop" />
      <ContentDescription>
        <TitlePhoto>Este ebook es para ti si...</TitlePhoto>
        <List>
          <li>
            Eres un principiante en el mundo del desarrollo web y deseas
            aprender los fundamentos de HTML desde cero.
          </li>
          <li>
            Necesitas una guía paso a paso que te ayude a dominar los conceptos
            básicos.
          </li>
          <li>
            Estás buscando un recurso introductorio para comenzar tu viaje como
            desarrollador web.
          </li>
        </List>
        <EbookContent />
        <BtnMain id="start">¡Comencemos!</BtnMain>
      </ContentDescription>
    </ContentMain>
  );
};

export default Content;
