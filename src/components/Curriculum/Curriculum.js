import { Flex } from "rebass";
import { MyHeading, MyHero, MyList, MyListItem, MyListTag, MyListTitle, MyListSubtitle } from "../../MyStyled";

const curriculumList = [
  {
    tag: "1주차: 카카오페이지",
    title: "웹사이트 한땀한땀 만들기",
    subtitle: "HTML, CSS, JS, DOM 조작하기",
  },
  {
    tag: "2주차: 쇼핑하우 사이트",
    title: "반응적인 웹",
    subtitle: "Promise, Fetch, CSS Animation",
  },
  {
    tag: "3주차: 쇼핑하우 사이트",
    title: "다양한 브라우저 지원을 위한 개발환경",
    subtitle: "Webpack, Babel로 개발환경 설정, async/await를 이용한 더 나은 비동기 처리",
  },
  {
    tag: "4주차: TODO 페이지",
    title: "개발 패턴과 객체지향 프로그래밍",
    subtitle: "MVC, Observer 패턴으로 의존성 줄이기",
  },
  {
    tag: "5주차: TODO 페이지",
    title: "매끄럽게 동작하는 웹",
    subtitle: "TypeScript, Test, 최적화",
  },
];

function getCurriculumElements() {
  const elements = curriculumList.map(({ tag, title, subtitle }) => {
    return (
      <MyListItem>
        <Flex alignItems="baseline" flexWrap="wrap">
          <MyListTag>{tag}</MyListTag>
          <Flex flexDirection="column">
            <MyListTitle>{title}</MyListTitle>
            <MyListSubtitle>{subtitle}</MyListSubtitle>
          </Flex>
        </Flex>
      </MyListItem>
    );
  });

  return (
    <MyList>{elements}</MyList>
  );
}

function Curriculum() {
  return (
    <MyHero className="bg-yellow">
      <MyHeading>5주 동안</MyHeading>
      {getCurriculumElements()}
    </MyHero>
  );
}

export default Curriculum;
