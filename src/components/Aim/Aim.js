import React from "react";
import { Container } from "../styles.styled";
import { TextContainer, Title, List, Aims, Text } from "./Aim.styled";

const Aim = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Моя мета</Title>
        <List>
          <Aims>відновити ваш психологічний стан</Aims>
          <Aims>
            підтримати вас та допомогти подолати кризовий період без негативних
            наслідків
          </Aims>
          <Aims>вирішити проблему якомога комфортним для вас способом</Aims>
          <Aims>
            допомогти знайти ресурси та розуміння можливостей для майбутнього
            життя
          </Aims>
        </List>
      </TextContainer>
      <div></div>
      <Text>
        Загальною метою є збереження та покращення психічного здоров'я
        українців.
      </Text>
    </Container>
  );
};

export default Aim;
