import React, { useEffect } from "react";
import { SiViber } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookMessenger, FaTelegramPlane } from "react-icons/fa";
import {
  Backdrop,
  ModalDiv,
  ModalTitle,
  IconContainer,
  IconItem,
  IconLink,
} from "./Modal.styled";

const Modal = ({ open, onClose }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick} open={open}>
      <ModalDiv>
        <ModalTitle>Запис на консультацію</ModalTitle>
        <IconContainer>
          <IconItem>
            <IconLink
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/messages/t/1517515381886407?locale=pl_PL"
            >
              <FaFacebookMessenger size={50} color="black" />
            </IconLink>
          </IconItem>
          <IconItem>
            <IconLink
              target="_blank"
              rel="noreferrer"
              href="viber://add?number=380970718651"
            >
              <SiViber size={50} color="black" />
            </IconLink>
          </IconItem>
          <IconItem>
            <IconLink
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/qr/DUSCHTMNKN5VN1"
            >
              <IoLogoWhatsapp size={50} color="black" />
            </IconLink>
          </IconItem>
          <IconItem>
            <IconLink
              target="_blank"
              rel="noreferrer"
              href="https:///t.me/SvitlanaRipka"
            >
              <FaTelegramPlane size={50} color="black" />
            </IconLink>
          </IconItem>
        </IconContainer>
      </ModalDiv>
    </Backdrop>
  );
};

export default Modal;
