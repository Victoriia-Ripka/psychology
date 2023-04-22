import React from "react";
import {
  MenuContainer,
  ContentContainer,
  Button,
  MenuList,
  MenuItem,
  MenuLink,
} from "./ModalMenu.styled";
import Modal from "../Modal/Modal";

const ModalMenu = ({ open }) => {
  return (
    <MenuContainer open={open}>
      <ContentContainer>
        <MenuList>
          <MenuItem>
            <MenuLink to="/">головна</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/about">про мене</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/consultations">консультації</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/program-for-parents">програма для батьків</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/articles">статті</MenuLink>
          </MenuItem>
        </MenuList>
        <Button>записатися на консультацію</Button>
        <Modal/>
      </ContentContainer>
    </MenuContainer>
  );
};

export default ModalMenu;
