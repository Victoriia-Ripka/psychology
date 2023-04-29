import styled from "styled-components";
import { device } from "../../styles/device";

export const ReviewsContainer = styled.div`
  margin: 0 auto;

  @media ${device.mobileTablet} {
    width: 445px;
  }
  @media ${device.tablet} {
    width: 685px;
  }
  @media ${device.laptop} {
    width: 1070px;
  }
`;

export const Title = styled.h2`
  font-family: "Lora";
  font-weight: 400;
  font-size: 15px;
  line-height: 1.3;
  color: #594d46;
  text-align: center;
  margin-bottom: 20px;

  @media ${device.mobileTablet} {
    text-align: left;

  }
  @media ${device.tablet} {
    font-size: 20px;
    margin-bottom: 25px;
  }
  @media ${device.laptop} {
    font-size: 32px;
    margin-bottom: 60px;
  }
`;
