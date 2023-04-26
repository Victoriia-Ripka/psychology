import React from "react";
import { Section, Title, Text, Button, HeroContainer } from "./Hero.styled";
import { Container } from "../styles.styled";
import Modal from "../Modal/Modal";

const Hero = () => {
  return (
    <>
      <Section>
        <Container>
          <HeroContainer>
            <div>
              <Title>Психологічна допомога у складні періоди життя</Title>
              <Text>
                Зробіть перший крок до внутрішнього спокою, задоволення від
                життя та щасливих стосунків
              </Text>
            </div>
            <Button type="button">записатися на онлайн консультацію</Button>
            <Modal/>
          </HeroContainer>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
