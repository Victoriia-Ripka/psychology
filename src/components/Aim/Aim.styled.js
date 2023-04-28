import styled from "styled-components";
import { device } from "../../styles/device";

export const TextContainer = styled.div`
  width: 140px;

  @media ${device.mobileTablet} {
    width: 155px;
    margin-left: 25px;
  }
  @media ${device.tablet} {
    width: 270px;
    margin-left: 14px;
  }
  @media ${device.tablet} {
    width: 450px;
    margin-left: 17px;
  }
`;

export const Title = styled.h2`
  font-family: "Lora";
  font-weight: 500;
  font-size: 15px;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 15px;
  text-transform: capitalize;

  color: #594d46;

  @media ${device.tablet} {
    font-size: 40px;
    margin-bottom: 40px;
  }
  @media ${device.laptop} {
    font-size: 48px;
  }
`;

export const List = styled.ul``;

export const Aims = styled.li`
  font-family: "Lora";
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  text-align: center;
  color: #000000;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media ${device.tablet} {
    font-size: 20px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  margin-top: 20px;
  font-family: "Lora";
  font-weight: 400;
  font-size: 13px;
  line-height: 1.3;
  text-align: center;
  width: 304px;

  color: #000000;

  @media ${device.mobileTablet} {
    width: 340px;
  }
  @media ${device.tablet} {
    font-size: 24px;
    width: 636px;
    margin-top: 50px;
  }

  @media ${device.laptop} {
    font-size: 32px;
    width: 746px;
    margin-top: 60px;
  }
`;
