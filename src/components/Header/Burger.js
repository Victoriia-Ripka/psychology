import React, { useState } from "react";
import styled from "styled-components";
import { device } from "styles/device";

const StyledBurger = styled.div`
  width: 20px;
  height: 16px;
  position: fixed;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 20px;
    height: 2px;
    background-color: white;
    border-radius: 1px;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media ${device.mobileTablet} {
    position: static;
  }

  @media ${device.tablet} {
    display: none;
    position: absolute;
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(null)

  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
