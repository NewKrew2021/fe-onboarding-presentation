import React from "react";

import IPhone from "../IPhone/IPhone";
import ImageSlide from "../ImageSlide/ImageSlide";

import "./FinalComments.css";
import { MyHeading, MyHero, MySubHeading, Slide } from "../../MyStyled";
import { Flex } from "rebass";

const finalCommentsImg = "images/final-comments.png";
const codereviewImg = "images/codereview.png";
const googlemeetImg = "images/googlemeet.png";

function FinalComments() {
  return (
    <React.Fragment>
      <MyHero>
        <MyHeading>이런 경험들이 좋았어요.</MyHeading>
        <Slide>
          <MySubHeading>매일 PR 날리고 코드리뷰 받기</MySubHeading>
          <ImageSlide
            img={codereviewImg}
            caption="훈훈한 코드리뷰의 현장.jpg"
          />
        </Slide>
      </MyHero>
      <MyHero>
        <Slide>
          <MySubHeading>매일 아침 스크럼하기</MySubHeading>
          <ImageSlide
            img={googlemeetImg}
            caption="쁘이"
          />
        </Slide>
      </MyHero>
      <MyHero>
        <Flex justifyContent="space-around" className="mw-900 m-auto">
          <IPhone image={finalCommentsImg} />
          <Flex flexDirection="column" className="p-1">
            <p class="title">
              같은 미션을 해결하면서 동료들에게 도움을 받았고, 그 과정에서 많이
              배울 수 있었어요.
            </p>
            <img
              src="https://item.kakaocdn.net/do/5c7668788e937dacb19c9648cb49b321b3a18fdf58bc66ec3f4b6084b7d0b570"
              className="m-auto"
            ></img>
            <p class="title">
              매일매일 서로의 코드를 보고 다양한 생각을 듣는 것이 성장에 많은
              도움이 되었어요.
            </p>
            <img
              src="https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c482f3bd8c9735553d03f6f982e10ebe70"
              className="m-auto"
            ></img>
          </Flex>
        </Flex>
      </MyHero>
    </React.Fragment>
  );
}

export default FinalComments;
