import React from "react";
import { BtnNav, Header, Navigation, Image } from "../../styled-componets/Nav";
import { logo } from "../../variables/var";
const SectionHeader = () => {
  return (
    <Header>
      <Navigation>
        <Image>
          <img
            src={logo}
            alt="logo-ciclo"
          />
        </Image>
        <BtnNav href="#start">+ Información</BtnNav>
      </Navigation>
    </Header>
  );
};

export default SectionHeader;
