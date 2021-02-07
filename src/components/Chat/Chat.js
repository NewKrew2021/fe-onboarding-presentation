import "./Chat.css";

// https://codepen.io/gabigan/pen/EGyLPp

const sampleChat = [
  {
    sender: true,
    author_img:
      "https://item.kakaocdn.net/do/3b983689b4a25b0807fe9f01fc872e768b566dca82634c93f811198148a26065",
    text: ["마우스를 조심히 움직여야만 원하는 항목을 고를 수 있어서 불편해..", "어떻게 개선할 수 있을까?"],
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
      "사용자는 원하는 카테고리에서 마우스를 멈추지 않을까?","마우스가 어디에 멈추는지 찾고, 멈출 때 상태를 업데이트하자!",
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

function Chat({data}) {
  return (
    <div id="messanger">
      <div class="inner">
        {data.map((chatGroup) => {
          return (
            <div className={chatGroup.sender ? "send" : "incoming"}>
              {chatGroup.text.map((text, idx) => {
                if (!chatGroup.sender && idx === chatGroup.text.length - 1) {
                  return (
                    <p>
                      <span class="icon-wrap">
                        <img src={chatGroup.author_img} />
                      </span>
                      <span class="bubble">{text}</span>
                    </p>
                  );
                } else {
                  return (
                    <p>
                      <span class="bubble">{text}</span>
                    </p>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chat;
