import styled from "styled-components";
import background from "../../images/png/x1/hero_x1.png";
import { device } from "styles/device";



export const Section = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  background-image: url(${background});
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  flex-grow: 1;
  @media ${device.laptop} {
    width: 1280px;
  }
`;

export const HeroContainer = styled.div`
    height: 60vh;
    margin 105px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: "Lora";
  font-weight: 500;
  font-size: 16px;
  width: 240px;
  line-height: 20px;
  color: #d9d9d9;
`;

export const Text = styled.p`
  font-family: "Lora";
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-top: 20px;
  width: 170px;

  color: #ffffff;
`;

export const Button = styled.button`
  width: 205px;
  height: 58px;

  background: rgba(89, 77, 70, 0.9);
  border-radius: 10px;
  border-color: transparent;
  cursor: pointer;

  font-family: "Lora";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #ffffff;

  &:hover,
  &:focus {
    background: black;
  }
`;
