import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("../../images/png/x1/hero_x1.png");
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 120px 8px 80px;
  flex-grow: 1;
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
  &:focus{
    background: black;
  }
`;
