import React from "react";
import {
  HeaderContainer,
  LogoText,
  Navigation,
  Button,
  Nav,
  HeaderContent,
  NavItem,
  MenuLink,
  ExtraDiv,
} from "./HeaderComponent.styled";
import Burger from "./Burger";

const HeaderComponent = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Nav>
            <LogoText to="/">Психолог Світлана Ріпка</LogoText>
            <Navigation>
              <NavItem>
                <MenuLink to="/">головна</MenuLink>
              </NavItem>
              <NavItem>
                <MenuLink to="/about">про мене</MenuLink>
              </NavItem>
              <NavItem>
                <MenuLink to="/consultations">консультації</MenuLink>
              </NavItem>
              <NavItem>
                <MenuLink to="/program-for-parents">
                  програма для батьків
                </MenuLink>
              </NavItem>
              <NavItem>
                <MenuLink to="/articles">статті</MenuLink>
              </NavItem>
            </Navigation>
          </Nav>
          <Button>записатися на консультацію</Button>
          <Burger />
        </HeaderContent>
      </HeaderContainer>
      <ExtraDiv></ExtraDiv>
    </>
  );
};

export default HeaderComponent;
