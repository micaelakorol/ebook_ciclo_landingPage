import React from "react";
import {
  ContentMain,
  TitlePhoto,
  ContentDescription,
  List,
} from "../../styled-componets/Content";
import laptop from "../../assets/laptop.svg";
import EbookContent from "./EbookContent";
import { linkHotmart } from "../../variables/var";
import Ancla from "../../reusable/Ancla";
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
        <Ancla href={linkHotmart} id="start">
          ¡Comencemos!
        </Ancla>
      </ContentDescription>
    </ContentMain>
  );
};

export default Content;
