import React from "react";
import { HeaderContainer, LogoText } from "./HeaderComponent.styled";

const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <LogoText to='/'>Психолог Світлана Ріпка</LogoText>
      <button></button>
    </HeaderContainer>
  );
};

export default HeaderComponent;
