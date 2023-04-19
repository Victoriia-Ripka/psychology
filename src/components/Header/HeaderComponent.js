import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  LogoText,
//   BurgerMenu,
  Navigation,
  Button,
  Nav,
} from "./HeaderComponent.styled";
import Burger from "./Burger";

const HeaderComponent = () => {
  const navigationItems = [
    { головна: "/" },
    { "про мене": "about" },
    { консултації: "consultations" },
    { "програма для батьків": "program-for-parents" },
    { статті: "articles" },
  ];

  return (
    <HeaderContainer>
      <Nav>
        <LogoText to="/">Психолог Світлана Ріпка</LogoText>
        <Navigation>
          {navigationItems.map((item, index) => (
            <li key={index}>
              <Link to={Object.values(item)}>{Object.keys(item)}</Link>
            </li>
          ))}
        </Navigation>
      </Nav>
      <Button>записатися на консультацію</Button>
      <Burger/>
    </HeaderContainer>
  );
};

export default HeaderComponent;
