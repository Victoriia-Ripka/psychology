import React from "react";

import {
  HeaderContainer,
  LogoText,
  //   BurgerMenu,
  Navigation,
  Button,
  Nav,
  HeaderContent,
  NavItem,
  MenuLink,
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
      <HeaderContent>
        <Nav>
          <LogoText to="/">Психолог Світлана Ріпка</LogoText>
          <Navigation>
            {navigationItems.map((item, index) => (
              <NavItem key={index}>
                <MenuLink to={Object.values(item)}>{Object.keys(item)}</MenuLink>
              </NavItem>
            ))}
          </Navigation>
        </Nav>
        <Button>записатися на консультацію</Button>
        <div>
          <Burger />
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default HeaderComponent;
