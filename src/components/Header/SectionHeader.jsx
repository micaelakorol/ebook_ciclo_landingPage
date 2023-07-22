import React from "react";
import { logo } from "../../variables/var";
import { BtnNav, Header, Navigation, Image } from "../../styled-componets/Nav";

const SectionHeader = () => {
  return (
    <Header>
      <Navigation>
        <Image>
          <img
            src="https://res.cloudinary.com/dgqyqd2pa/image/upload/v1689711704/logo/logoN_zaouiq.svg"
            alt="logo-ciclo"
          />
        </Image>
        <BtnNav>Otro boton</BtnNav>
        {/* button */}
      </Navigation>
    </Header>
  );
};

export default SectionHeader;
