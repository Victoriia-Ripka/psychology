import React from "react";
import { Container } from "../styles.styled";
import {
  ReviewsContainer,
  Title,
  SlideContainer,
  Slide,
  User,
  Info,
  Img,
  UserInfo,
  Name,
  Country,
  Review,
} from "./Reviews.styled";

const Reviews = () => {
  return (
    <Container>
      <ReviewsContainer>
        <Title>Відгуки моїх клієнтів</Title>
        <div>
          <SlideContainer>
            <Slide>
              <User>
                <Info>
                  <Img src="" alt="" />
                  <UserInfo>
                    <Name>Олександра</Name>
                    <Country>США</Country>
                  </UserInfo>
                </Info>
                <Review>
                  Мій шлях до терапії був довгим. Чи то я пручалася, чи не була
                  готова - досі не знаю, але знаю точно, що дуже рада, що
                  знайшла Світлану. Роки чотири тому моя найкраща подруга
                  працювала зі Світланою. І я бачила результат цієї праці.
                  Плідний та дуже стрімкий. І в момент, коли я все ж таки
                  наважилася знайти собі власного терапевта, я звернулася саме
                  до неї. Я не знала чи ми поладнаємо і нам буде комфортно...
                </Review>
              </User>
            </Slide>
          </SlideContainer>
          <SlideContainer>
            <Slide>
              <User>
                <Info>
                  <Img src="" alt="" />
                  <UserInfo>
                    <Name>Олександра</Name>
                    <Country>США</Country>
                  </UserInfo>
                </Info>
                <Review>
                  Мій шлях до терапії був довгим. Чи то я пручалася, чи не була
                  готова - досі не знаю, але знаю точно, що дуже рада, що
                  знайшла Світлану. Роки чотири тому моя найкраща подруга
                  працювала зі Світланою. І я бачила результат цієї праці.
                  Плідний та дуже стрімкий. І в момент, коли я все ж таки
                  наважилася знайти собі власного терапевта, я звернулася саме
                  до неї. Я не знала чи ми поладнаємо і нам буде комфортно...
                </Review>
              </User>
            </Slide>
          </SlideContainer>
          <SlideContainer>
            <Slide>
              <User>
                <Info>
                  <Img src="" alt="" />
                  <UserInfo>
                    <Name>Олександра</Name>
                    <Country>США</Country>
                  </UserInfo>
                </Info>
                <Review>
                  Мій шлях до терапії був довгим. Чи то я пручалася, чи не була
                  готова - досі не знаю, але знаю точно, що дуже рада, що
                  знайшла Світлану. Роки чотири тому моя найкраща подруга
                  працювала зі Світланою. І я бачила результат цієї праці.
                  Плідний та дуже стрімкий. І в момент, коли я все ж таки
                  наважилася знайти собі власного терапевта, я звернулася саме
                  до неї. Я не знала чи ми поладнаємо і нам буде комфортно...
                </Review>
              </User>
            </Slide>
          </SlideContainer>
        </div>
      </ReviewsContainer>
    </Container>
  );
};

export default Reviews;
