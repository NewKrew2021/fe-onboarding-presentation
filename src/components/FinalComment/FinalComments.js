import React from 'react';
import finalCommentsImg from "../images/final-comments.png";
import codereviewImg from "../images/codereview.png";
import googlemeetImg from "../images/googlemeet.png";

import IPhone from '../IPhone/IPhone';
import ImageSlide from '../ImageSlide/ImageSlide';

import "./FinalComments.css";

function FinalComments() {
  return (
    <React.Fragment>
      <div className="slide">
        <div className="title">이런 경험들이 좋았어요.</div>
        <ImageSlide
          title={'매일 PR 날리고 코드리뷰 받기'}
          img={codereviewImg}
          caption={'훈훈한 코드리뷰의 현장.jpg'}
        />
        <ImageSlide
          title={'매일 아침 스크럼하기'}
          img={googlemeetImg}
          caption={'쁘이'}
        />
      </div>
      <div className="slide" style={{display: 'flex'}}>
        <IPhone image = {finalCommentsImg}/>
        <div className="content">
          <div className="title">
            같은 미션을 해결하면서 동료들에게 도움을 받았고, 그 과정에서 많이 배울 수 있었어요.
          </div>
          <img src="https://item.kakaocdn.net/do/5c7668788e937dacb19c9648cb49b321b3a18fdf58bc66ec3f4b6084b7d0b570"></img>
          <div className="title">
            매일매일 서로의 코드를 보고 다양한 생각을 듣는 것이 성장에
            많은 도움이 되었어요.
          </div>
          <img src={"https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c482f3bd8c9735553d03f6f982e10ebe70"}></img>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FinalComments;
