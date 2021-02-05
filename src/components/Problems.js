import React from "react";
import categoryBeforeGif from "../images/category-before.gif";
import categoryAfterGif from "../images/category-after.gif";
import todoDragAndDropGif from "../images/draganddrop.gif";
import Macbook from "./Macbook";

import "./Problems.css";
import Chat from "./Chat";

function Problems() {
  return (
    <React.Fragment>
      <div className="title">우리의 머리를 아프게 했던 문제들</div>
      <div className="slide" style={{position:'relative'}}>
        <div className="problem">
          첫 번째 미션: 카테고리 메뉴에서 사용자 경험 개선하기
        </div>
        <div style={{padding: '50px 0 20px 0', fontSize: '20px'}}>
          <i>
            라이언은 닌텐도 스위치를 사기 위해서 쇼핑하우 사이트에 들어가는데...
          </i>
        </div>
        <Macbook screen={categoryBeforeGif} />
        <img style={{position:'absolute', bottom: '80px', right:0}} src="https://item.kakaocdn.net/do/3b983689b4a25b0807fe9f01fc872e76f604e7b0e6900f9ac53a43965300eb9a"></img>
      </div>
      <div className="slide">
        <Chat/>
      </div>
      <div className="slide" style={{position:'relative'}}>
        <Macbook screen={categoryAfterGif} />
        <img style={{position:'absolute', bottom: '80px', right:0}} src="https://item.kakaocdn.net/do/3b983689b4a25b0807fe9f01fc872e764022de826f725e10df604bf1b9725cfd" />
        </div>
      <div className="slide">
        <div className="problem">
          두 번째 미션: 칸반보드에서 카드 드래그 앤 드롭 구현하기
        </div>
        <Chat/>
        라이언: 드래그 앤 드롭을 구현하라니.. 흔한 UI이지만 직접 구현한다니 감이
        잘 오지 않아.
        <br />
        제이지: 유저가 항목을 누를 때, 누른 카드를 복사해서 유저의 커서 위치로
        실시간으로 업데이트해 준다면 카드를 드래그하는 느낌이 들 거야.
        <br />
        어피치: 드롭할 위치는 마우스 커서 위치를 계산해서, 미리 예측된 곳에
        새로운 카드를 흐리게 보여 주자.
        <br />
        네오: 마우스 위치를 일일히 계산하려면 너무 복잡한걸.. 더 쉬운 방법은
        없을까?
        <br />
        콘: 순서가 바뀌면 데이터를 서버로 보내서 업데이트하면 완성!
        <br />
        <img className="demoimg" src={todoDragAndDropGif} ></img>
        <img src="https://item.kakaocdn.net/do/3b983689b4a25b0807fe9f01fc872e76616b58f7bf017e58d417ccb3283deeb3"/>
                서버까지 개발하다니 풀스택 개발자로 한 걸음 나아간 느낌이야.. (두근두근)
        <br />
      </div>
    </React.Fragment>
  );
}

export default Problems;
