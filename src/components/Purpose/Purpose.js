import { MyHeading, MyHero, MySubHeading } from "../../MyStyled";

function Purpose() {
  return (
    <MyHero className="bg-yellow">
      <MyHeading>학습목표</MyHeading>
      <MySubHeading>React, Vue 등 현대 프레임워크의 밑바탕이 되는 기초지식 이해</MySubHeading>
    </MyHero>
  );
}

export default Purpose;
