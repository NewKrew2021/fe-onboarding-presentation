import React from "react";
import Macbook from "../Macbook/Macbook";

import "./Problems.css";
import Chat from "../Chat/Chat";
import { MyHeading, MySubHeading, MyHero, CenterItalic, Slide, LargeSlide } from "../../MyStyled";

const categoryBeforeGif = "images/category-before.gif";
const categoryAfterGif = "images/category-after.gif";
const todoDragAndDropGif = "images/draganddrop.gif";

const categoryChat = [
  {
    sender: true,
    author_img:
      "https://item.kakaocdn.net/do/3b983689b4a25b0807fe9f01fc872e768b566dca82634c93f811198148a26065",
    text: [
      "마우스를 조심히 움직여야만 원하는 항목을 고를 수 있어서 불편해..",
      "어떻게 개선할 수 있을까?",
    ],
  },
  {
    author_img:
      "https://item.kakaocdn.net/do/3b983689b4a25b0807fe9f01fc872e766fb33a4b4cf43b6605fc7a1e262f0845",
    text: [
      "마우스 이동 속력이 빠를 때에는 유효하지 않은 이동으로 처리하는 건 어떨까?",
    ],
  },
  {
    author_img:
      "https://item.kakaocdn.net/do/b82e5d251efe2bc05cc55faf9070822f6fb33a4b4cf43b6605fc7a1e262f0845",
    text: [
      "사용자는 원하는 카테고리에서 마우스를 멈추지 않을까?",
      "마우스가 어디에 멈추는지 찾고, 멈출 때 상태를 업데이트하자!",
    ],
  },
  {
    author_img:
      "https://item.kakaocdn.net/do/3b983689b4a25b0807fe9f01fc872e767e6f47a71c79378b48860ead6a12bf11",
    text: [
      "마우스 이동 방향을 분석해서, 어느 각도로 이동하는지에 따라서 다른 액션을 보여주는 것도 좋을 것 같아!",
    ],
  },
  {
    sender: true,
    author_img:
      "https://item.kakaocdn.net/do/3b983689b4a25b0807fe9f01fc872e768b566dca82634c93f811198148a26065",
    text: ["좋았어!"],
  },
];

const draganddropChat = [
  {
    sender: true,
    author_img:
      "https://item.kakaocdn.net/do/3b983689b4a25b0807fe9f01fc872e768b566dca82634c93f811198148a26065",
    text: [
      "드래그 앤 드롭을 구현하라니.. 감이 잘 오지 않아.",
    ],
  },
  {
    author_img:
      "https://item.kakaocdn.net/do/3b983689b4a25b0807fe9f01fc872e766fb33a4b4cf43b6605fc7a1e262f0845",
    text: [
      "유저가 항목을 누를 때, 누른 카드를 복사해서 유저의 커서 위치로 실시간으로 업데이트해 준다면 카드를 드래그하는 느낌이 들 거야.",
    ],
  },
  {
    author_img:
      "https://item.kakaocdn.net/do/3b983689b4a25b0807fe9f01fc872e767e6f47a71c79378b48860ead6a12bf11",
    text: [
      "드롭할 위치는 마우스 커서 위치를 계산해서, 미리 예측된 곳에 새로운 카드를 흐리게 보여 주자.",
    ],
  },
  {
    author_img:
      "https://item.kakaocdn.net/do/b82e5d251efe2bc05cc55faf9070822f6fb33a4b4cf43b6605fc7a1e262f0845",
    text: ["순서가 바뀌면 데이터를 서버로 보내서 업데이트하면 완성!"],
  },
];

function Problems() {
  return (
    <React.Fragment>
      <MyHero>
        <MyHeading>우리의 머리를 아프게 했던 문제들</MyHeading>
        <MySubHeading>
          첫 번째 미션: 카테고리 메뉴에서 사용자 경험 개선하기
        </MySubHeading>
        <Slide>
          <CenterItalic>
              라이언은 닌텐도 스위치를 사기 위해서 쇼핑하우 사이트에 들어가는데...
          </CenterItalic>
          <Macbook screen={categoryBeforeGif} />
          <img
            style={{ position: "absolute", bottom: "-20px", right: "-75px" }}
            src="https://item.kakaocdn.net/do/3b983689b4a25b0807fe9f01fc872e76f604e7b0e6900f9ac53a43965300eb9a"
          ></img>
        </Slide>
      </MyHero>
      <MyHero>
        <Chat data={categoryChat} />
      </MyHero>
      <MyHero>
        <Slide>
          <Macbook screen={categoryAfterGif} />
          <img
            style={{ position: "absolute", bottom: "-20px", right: "-75px" }}
            src="https://item.kakaocdn.net/do/3b983689b4a25b0807fe9f01fc872e764022de826f725e10df604bf1b9725cfd"
          />
        </Slide>
      </MyHero>
      <MyHero>
      <MyHeading>우리의 머리를 아프게 했던 문제들</MyHeading>
        <MySubHeading>
          두 번째 미션: 칸반보드에서 카드 드래그 앤 드롭 구현하기
        </MySubHeading>
          <Chat data={draganddropChat} />
      </MyHero>
      <MyHero>
        <LargeSlide>
          <LargeSlide>
            <img width="100%" src={todoDragAndDropGif}></img>
            <img
              style={{ position: "absolute", bottom: "-50px", right: "-30px" }}
              src="https://item.kakaocdn.net/do/3b983689b4a25b0807fe9f01fc872e76616b58f7bf017e58d417ccb3283deeb3"
              />
          </LargeSlide>
          <CenterItalic>
            서버까지 개발하다니 풀스택 개발자로 한 걸음 나아간 느낌이야..(두근두근)
          </CenterItalic>
        </LargeSlide>
      </MyHero>
    </React.Fragment>
  );
}

export default Problems;
