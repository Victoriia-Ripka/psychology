import React from "react";
import { Container } from "../styles.styled";
import {
  GreetingContainer,
  TextContainer,
  ImgContainer,
  Text,
} from "./Greeting.styled";
import image from "../../images/png/x1/greeting_x1.png"

const Greeting = () => {
  return (
    <Container>
      <GreetingContainer>
        <ImgContainer>
          <img
            src={image}
            alt="white flowers and notes"
          />
        </ImgContainer>
        <TextContainer>
          <Text>
            Вітаю! Я - Світлана Ріпка, дипломована психологиня з додатковою
            психотерапевтичною та психоаналітичною освітою і досвідом роботи
            понад 20 років.
          </Text>
          <Text>
            Запити, з якими я працюю, торкаються складних періодів життя,
            наповнених конфліктами та кризами. На жаль, не існує життя без
            проблем, але на щастя більшість проблем та криз минають.{" "}
          </Text>
          <Text>
            Іноді саме кризи відкривають людині нові шляхи для розвитку та
            самовдосконалення. Але ці шляхи можуть залишитись й непомітними,
            якщо вся увага прикута до проблеми, а не до способів її вирішення.
            Щоб цьому запобігти звертаються до психолога.
          </Text>
        </TextContainer>
      </GreetingContainer>
    </Container>
  );
};

export default Greeting;
