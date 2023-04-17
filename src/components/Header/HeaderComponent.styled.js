import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../styles/device";

export const HeaderContainer = styled.div`
  background: #594d46;
  padding: 12px 8px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
