import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../styles/device";

export const HeaderContainer = styled.div`
  background: #594d46;
  padding: 12px 8px;
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  z-index: 2;

  @media ${device.mobileTablet} {
    height: 60px;
  }
  @media ${device.tablet} {
    height: 80px;
    align-iems: center;
  }
  @media ${device.laptop} {
    height: 150px;
    padding: 30px 110px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const LogoText = styled(Link)`
  font-family: "Lora";
  font-weight: 400;
  font-size: 10px;
  line-height: 1.3;
  text-decoration: none;
  color: #ffffff;

  @media ${device.mobileTablet} {
    font-size: 16px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
`;

export const Navigation = styled.ul`
  display: none;

  @media ${device.tablet} {
    display: flex;
    flex-flow: row nowrap;
  }
`;

export const Button = styled.button`
  background: #594d46;
  border: 1px solid #ffffff;
  color: white;
  font-family: Lora;
  line-height: 1.25;
  font-size: 13px;
  width: 250px;
  height: 30px;

  @media ${device.preTablet} {
    display: none;
  }

  @media ${device.laptop} {
    font-size: 16px;
    width: 300px;
    height: 40px;
  }
`;

export const BurgerMenu = styled.button`
  @media ${device.tablet} {
    display: none;
  }
`;
