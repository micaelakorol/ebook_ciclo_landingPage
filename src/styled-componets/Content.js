import { styled } from "styled-components";
import { color } from "./color";

const ContentMain = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top:3rem;
  width: 80%;
  .laptop {
    width: 80%;
  }
  @media(max-width:1024px){
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 0 2rem 0 ;
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
`;
const TitlePhoto = styled.h3`
  color: ${color.dark};
  margin-bottom: 0.7rem;
`;

const List = styled.ul`
  color: ${color.gray};
`;

const AboutMe = styled.p`
  color: ${color.gray};
  width: 60%;
  text-align: center;
  margin:.6rem 0 .6rem 0;
`;

const DetailsEbook = styled.details`
margin: .5rem 0 .5rem 0;
cursor: pointer;
text-decoration:underline;
`

export { ContentMain, List, TitlePhoto, ContentDescription,AboutMe,DetailsEbook };
