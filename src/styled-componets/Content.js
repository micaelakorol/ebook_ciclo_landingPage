import { styled } from "styled-components";
import { color } from "./color";

const ContentMain = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80vw;
  .laptop {
    width: 80%;
  }
`;

const ContentDescription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1rem 0 1rem;
  button {
    width: 35%;
    padding: 0.7rem 0.5rem;
    margin: 1rem 0 0 0;
  }
`;
const TitlePhoto = styled.h3`
  color: ${color.dark};
  margin-bottom: 0.7rem;
`;

const Text = styled.p`
  color: ${color.gray};
`;

export { ContentMain, Text, TitlePhoto, ContentDescription };
