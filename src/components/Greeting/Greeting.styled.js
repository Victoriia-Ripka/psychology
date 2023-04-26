import styled from "styled-components";
import { device } from "../../styles/device";

export const GreetingContainer = styled.div`
  display: flex;
  margin: 15px auto 0;
  align-items: center;
`;

export const ImgContainer = styled.div`
  width: 60%;
  height: 265px;
  background: rgba(166, 155, 146, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobileTablet} {
    width: 45%;
    height: 314px;
  }

  @media ${device.tablet} {
    width: 35%;
    height: 392px;
  }

  @media ${device.laptop} {
    width: 35%;
    height: 637px;
  }
`;

export const Img = styled.img`
  width: 147.36px;
`;

export const TextContainer = styled.div`
  width: 185px;
  transform: translateX(-10%);

  @media ${device.mobileTablet} {
    width: 206px;
    transform: translateX(0);
    margin-left: 10px;
  }

  @media ${device.tablet} {
    width: 365px;
    margin-left: 40px;
  }

  @media ${device.laptop} {
    width: 520px;
    margin-left: 90px;
  }
`;

export const Text = styled.div`
  width: 185px;
  font-family: "Lora";
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 26px;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  @media ${device.laptop} {
    font-size: 24px;
    line-height: 31px;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
