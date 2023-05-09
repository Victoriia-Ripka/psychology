import styled from "styled-components";
import { device } from "../../styles/device";

export const Backdrop = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  position: ${({ open }) => (open ? "fixed" : "absolute")};
  overflow: ${({ open }) => (open ? "" : "hidden")};
  pointer-events: ${({ open }) => (open ? "" : "none")};
  top: 0;
  left: 0;
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
  position: relative;

  @media ${device.mobileTablet} {
    width: 80%;
    height: 80%;
    max-width: 440px;
    max-height: 335px;
    padding: 40px 100px;
    margin: auto;
    border: 1px solid #594d46;
    border-radius: 25px;
  }

  @media ${device.tablet} {
    max-width: 700px;
    padding: 80px 130px;
  }

  @media ${device.laptop} {
    max-width: 900px;
    max-height: 300px;
    padding: 80px 270px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  transform: scale(1);
  transition: 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.5);
  }
`;

export const User = styled.div`
`;

export const AvatarDiv = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #d9d9d9;
  object-fit: cover;

  @media ${device.mobileTablet} {
    transform: scale(1.1);
    // width: 33px;
  }
  @media ${device.tablet} {
    transform: scale(1.7);
    // width: 51px;
  }
  @media ${device.laptop} {
    transform: scale(3.1);
    // width: 93px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const UserInfo = styled.div`
  margin-left: 12px;

  @media ${device.tablet} {
    margin-left: 25px;
  }
  @media ${device.laptop} {
    margin-left: 40px;
  }
`;

export const Name = styled.p`
  font-family: "Lora";
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  color: #001a23;
  margin-bottom: 2px;

  @media ${device.tablet} {
    font-size: 18px;
    margin-bottom: 5px;
  }
  @media ${device.laptop} {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const Country = styled.p`
  font-family: "Lora";
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  color: #000000;

  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
`;

export const Review = styled.p`
  font-family: "Lora";
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  margin-top: 10px;

  color: #000000;

  @media ${device.tablet} {
    font-size: 16px;
    margin-top: 20px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
`;