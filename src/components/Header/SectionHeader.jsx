import React from "react";
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
        <BtnNav href="#start">+ Información</BtnNav>
        {/* button */}
      </Navigation>
    </Header>
  );
};

export default SectionHeader;
