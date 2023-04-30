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

export const SlideContainer = styled.div``;

export const Slide = styled.div`
  background: #ffffff;
  border: 1px solid #594d46;
  border-radius: 25px;
  padding: 25px;
  width: 265px;
`;

export const User = styled.div`
  // display: flex;
  // align-items: center;
`;

export const Info = styled.div`
  display: flex;
`;

export const Img = styled.img`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background: #d9d9d9;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  margin-left: 12px;
  margin-bottom: 5px;
`;

export const Name = styled.p`
  font-family: "Lora";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #001a23;
  margin-bottom: 2px;
`;

export const Country = styled.p`
  font-family: "Lora";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #000000;
`;

export const Review = styled.p`
  font-family: "Lora";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #000000;
`;
