import React, { useState } from "react";
import { Container } from "../styles.styled";
import {
  ReviewsContainer,
  Title,
  SlideContainer,
  Slides,
  Slide,
  User,
  Info,
  AvatarDiv,
  UserInfo,
  Name,
  Country,
  Review,
  NextButton,
  PreviousButton,
} from "./Reviews.styled";
import { RxAvatar } from "react-icons/rx";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const ReviewsArray = [
  {
    name: "Олександра",
    country: "США",
    review:
      "Мій шлях до терапії був довгим. Чи то я пручалася, чи не була готова - досі не знаю, але знаю точно, що дуже рада, що знайшла Світлану. Роки чотири тому моя найкраща подруга працювала зі Світланою. І я бачила результат цієї праці. Плідний та дуже стрімкий. І в момент, коли я все ж таки наважилася знайти собі власного терапевта, я звернулася саме до неї. Я не знала чи ми поладнаємо і нам буде комфортно...",
  },
  {
    name: "Тетяна",
    country: "Україна",
    review:
      "Я думаю, що всі пам’ятають свій стан, який ми мали в перші місяці повномасштабної. Я для себе в той момент шукала й використовувала будь-які методи й техніки психологічної підтримки, бо й сама в цей час допомагала й підтримувала.  Знаючи плюси психотерапевтичної групової роботи, розуміла, що саме це зараз необхідно. А побачивши, хто пропонує групову підтримку, ні секунди не сумнівалася. Не могла дочекатися початку. Щоб розібратися зі своїми внутрішніми станами й переживаннями, щоб розуміти, що відбувається в цей же час з іншими, щоб просто по-людськи щиро поговорити про наболіле й сокровенне, щоб мати мудрість прожити й пережити все, що прийшло з початком війни, і відпустити те, що втрачене. Отримала дуже тепле, щире, емоційне спілкування. А ще матеріал для роздумів. Таких глибоких, не завжди комфортних, але необхідних, щоб мати можливість рухатися далі. Подобалося, що після зустрічі з‘являється ресурс й особливе бачення. Щиро вдячна Світлані за її душевне благородство, за її вміння тримати фокус на найважливішому, за людську теплоту й щирість, за те, що її професійна допомога прийшла в потрібний час, а ще за її мудрість і мужність жити. ",
  },
  {
    name: "Альона",
    country: "Україна",
    review:
      "Хотілося б подякувати Світлані за наші зустрічі-консультації, для мене це було дуже корисно. Почну з того, що потрапила я до Світлани саме у момент, коли мені здавалось, що світ руйнується і я не справляюся. І завдяки консультаціям зі Світланою, сама не помічаючи як, я знаходила виходи і ресурси до подальших дій. Почала відчувати опору під ногами, знов здобувала право на життя і вчилась по-новому розуміти свої емоції, свої думки і бажання. Я почала помічати, що вчуся знаходити відповіді та в результаті маю рішення для тієї чи іншої ситуації. Світлана дуже делікатно, легко допомагає знайти те, що сподвігає рухатись далі. Всі консультації відбуваються на високому професійному рівні в атмосфері довіри і конфіденційності. Тому від усього серця велике людське дякую, Світлано, ваша праця дуже важлива.",
  },
];

const Reviews = () => {
  const reviewsCount = ReviewsArray.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const getPrev = () => {
    const indexWillbe = (activeIndex - 1 + reviewsCount) % reviewsCount;
    setActiveIndex(indexWillbe);
  };

  const getNext = () => {
    const indexWillbe = (activeIndex + 1) % reviewsCount;
    setActiveIndex(indexWillbe);
  };

  const cutText = (text) => {
    const newText = text.slice(0, 400) + "...";
    return newText;
  };

  return (
    <Container>
      <ReviewsContainer>
        <Title>Відгуки моїх клієнтів</Title>
        <Slides>
          <PreviousButton id="prev" onClick={getPrev}>
            <MdArrowBackIosNew />
          </PreviousButton>
          {ReviewsArray.map((item, index) => {
            return (
              <SlideContainer
                key={index}
                active={activeIndex === index ? true : false}
              >
                <Slide>
                  <User>
                    <Info>
                      <AvatarDiv>
                        <RxAvatar size={30} />
                      </AvatarDiv>
                      <UserInfo>
                        <Name>{item.name}</Name>
                        <Country>{item.country} </Country>
                      </UserInfo>
                    </Info>
                    <Review>{cutText(item.review)}</Review>
                  </User>
                </Slide>
              </SlideContainer>
            );
          })}
          <NextButton id="next" onClick={getNext}>
            <MdArrowForwardIos />
          </NextButton>
        </Slides>
      </ReviewsContainer>
    </Container>
  );
};

export default Reviews;
