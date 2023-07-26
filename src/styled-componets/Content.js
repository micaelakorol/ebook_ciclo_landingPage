import { styled } from "styled-components";
import { color } from "./color";

const ContentMain = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3rem;
  width: 80%;
  .laptop {
    width: 80%;
  }
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 0 2rem 0;
  }
  @media (max-width: 480px) {
    .laptop {
      width: 100%;
    }
    li,
    details,
    a {
      font-size: 1.3rem;
    }
    h3 {
      font-size: 1.7rem;
      margin: 2rem 0 2rem 0;
    }
  }
`;

const ContentDescription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1rem 0 1rem;
  a {
    width: 35%;
    text-align: center;
    padding: 0.7rem 0.5rem;
    margin: 1rem 0 0 0;
  }
  @media (max-width: 480px) {
    a {
      width: 100%;
    }
    .laptop {
      width: 100%;
    }
  }
`;
const TitlePhoto = styled.h3`
  color: ${color.dark};
  margin-bottom: 0.7rem;
`;

const List = styled.ul`
  color: ${color.gray};
`;

const AboutMe = styled.p`
  color: ${color.aboutMe};
  width: 70%;
  text-align: center;
  margin: 1rem 0 1rem 0;
  @media (max-width: 480px) {
    font-size: 1.3rem;
    width: 100%;
    padding: 0.5rem;
  }
`;

const DetailsEbook = styled.details`
  margin: 0.5rem 0 0.5rem 0;
  cursor: pointer;
  text-decoration: underline;
`;

export {
  ContentMain,
  List,
  TitlePhoto,
  ContentDescription,
  AboutMe,
  DetailsEbook,
};
