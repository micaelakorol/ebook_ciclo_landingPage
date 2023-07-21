import React from "react";
import { ContentMain, TitlePhoto,Text, ContentDescription } from "../../styled-componets/Content";
import laptop from "../../assets/laptop.svg";
import { BtnMain } from "../../styled-componets/Main";

const Content = () => {
  return (
    <ContentMain>
      <img src={laptop} alt="laptop" className="laptop" />
      <ContentDescription>
      <TitlePhoto>TITULO</TitlePhoto>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
        dolores et sint quasi numquam natus vitae voluptas enim quos nisi,
        officia eligendi magnam, iusto fugit ullam ducimus ipsa commodi
        officiis!
      </Text>
      <BtnMain>Otro boton</BtnMain>
      </ContentDescription>
    </ContentMain>
  );
};

export default Content;
