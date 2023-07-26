import styled from "styled-components";
import { BtnMain } from "./Main";
import { color } from "./color";
const Header = styled.header`
  width: 100%;
  margin-top: -2.4rem;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.5rem 0 0.5rem;
`;

const Image = styled.section`
  img {
    width: auto;
  }
`;

const BtnNav = styled(BtnMain)`
  color: ${color.btnMain};
  background-color: ${color.yellowLight};
  padding: 0.7rem 2rem;
  margin-top: -0.2rem;
  text-transform: uppercase;
  font-size: 0.7rem;
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export { Header, Navigation, BtnNav, Image };
