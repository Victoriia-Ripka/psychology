import React, {useState} from "react";
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
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

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
        <Button type="button" onClick={handleClick}>записатися на консультацію</Button>
        <Modal open={openModal} setOpenModal={setOpenModal} />
      </ContentContainer>
    </MenuContainer>
  );
};

export default ModalMenu;
