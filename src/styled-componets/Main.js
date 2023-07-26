import { styled } from "styled-components";
import { color } from "./color";

const ContainerPrincipal = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -3rem;
  @media (max-width: 480px) {
    margin-top: 0;
  }
`;
const TitleMain = styled.h1`
  margin: 1rem 0 1rem 0;
  text-align: center;
`;
const Subtitle = styled.h2`
  font-weight: 500;
  text-align: center;
  margin: 0 0.5rem 0 0.5rem;
`;
const BtnMain = styled.a`
  margin: 1rem 0 0 1rem;
  text-decoration: none;
  padding: 0.7rem 4rem;
  font-size: 1.01rem;
  color: ${color.white};
  background-color: ${color.btnMain};
  border-radius: 0.4rem;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export { ContainerPrincipal, TitleMain, Subtitle, BtnMain };
