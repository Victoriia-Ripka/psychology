import styled from "styled-components";
import { device } from "../../styles/device";

export const Backdrop = styled.div`
  // display: ${({ open }) => (open ? "flex" : "none")}
  // position: ${({ open }) => (open ? "fixed" : "absolute")}
  display: flex;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 50;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalDiv = styled.div`
  background: white;
  padding: 87px 48px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.mobileTablet} {
    width: 80%;
    height: 80%;
    max-width: 900px;
    max-height: 444px;
    padding: 80px 270px;
    margin: auto;
    border: 1px solid #594d46;
    border-radius: 25px;
  }
`;

export const ModalTitle = styled.h2`
  font-family: "Lora";
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  color: #000000;
  margin-bottom: 60px;
`;

export const IconContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 145px;
  height: 140px;
  justify-content: space-between;
  align-content: space-between;

  @media ${device.mobileTablet} {
    width: 360px;
  }
`;

export const IconItem = styled.li``;

export const IconLink = styled.a``;
