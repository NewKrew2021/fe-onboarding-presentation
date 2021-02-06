import { Flex } from "rebass";
import { MyHeading, MyHero, Youtube, YoutubeWrapper } from "../../MyStyled";

function WhatWeMade() {
  return (
    <MyHero>
      <Flex alignSelf="stretch" alignItems="center">
        <Flex flexDirection="column" flex="1">
          <MyHeading>우리가 만들었어요!</MyHeading>
          <YoutubeWrapper>
            <Youtube
              title="MadeByFE"
              src="https://www.youtube.com/embed/-WLlcVxBmnQ"
              allowFullScreen="true"
            ></Youtube>
          </YoutubeWrapper>
        </Flex>
        <img src="emot_001_x3.webp" alt="ryan" width="26%" className="p-3" loading="lazy"/>
      </Flex>
    </MyHero>
  );
}

export default WhatWeMade;
