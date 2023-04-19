import React from "react";
import styled from "styled-components";
import { device } from "styles/device";

const StyledBurger = styled.div`
  width: 20px;
  height: 16px;
  position: fixed;
  top: 12px;
  right: 12px;

  div {
    width: 20px;
    height: 2px;
    background-color: white;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const Burger = () => {
  return (
    <StyledBurger>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
