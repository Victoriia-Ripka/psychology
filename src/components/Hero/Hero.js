import React from "react";
import { Section, Title, Text, Button, HeroContainer } from "./Hero.styled";
import { Container } from "components/styles.styled";

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
          </HeroContainer>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
