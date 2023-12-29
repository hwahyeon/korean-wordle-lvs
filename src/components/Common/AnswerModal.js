import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/modal.scss";

const AnswerPopup = (props) => {
  // console.log(props)
  const rounds = Math.floor(props.rounds / 5);
  let msg = "";

  switch (rounds) {
    case 1:
      msg = (
        <>
          대단한 운! 첫 시도에 바로 맞추셨어요!
          <br />
          저기, 혹시 복권 번호 좀 알려줄래요?
        </>
      );
      break;
    case 2:
      msg = (
        <>
          굉장합니다! 단 두 번만에 성공!
          <br />
          복권 구매를 고려해 보는 건 어떨까요?
          <br />
          물론 저는 책임지지 않을 겁니다만
        </>
      );
      break;
    case 3:
      msg = (
        <>
          놀라워요! 세 번만에 맞췄어요.
          <br />
          운인가요? 실력인가요?
          <br />
          아, 운도 실력이라고요?
        </>
      );
      break;
    case 4:
      msg = (
        <>
          네 번째 시도에 성공하셨군요.
          <br />
          진짜 재미는 네 번째부터죠!
        </>
      );
      break;
    case 5:
      msg = (
        <>
          다섯 번째 시도에 성공하셨군요.
          <br />
          표정이 여유로워 보여요
          <br />
          긴장 안 했다고요? 정말?
        </>
      );
      break;
    default:
      msg = (
        <>
          휴<br />
          마지막 기회를 놓치지 않으셨군요!
          <br />
          성공!
        </>
      );
  }

  const [isVisible, setIsVisible] = useState(true);
  const [isMeanWord, setIsMeanWord] = useState(true);
  const navigate = useNavigate();

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleWordsMeaningClick = () => {};

  if (!isVisible) return null;

  return (
    <div className="Overlay">
      <div className="Content">
        <div className="CloseButton" onClick={handleCloseClick}>
          &times;
        </div>
        <div className="content_txt">
          <p>{msg}</p>
        </div>
        <div className="Buttons">
          <div className="HomeButton" onClick={handleWordsMeaningClick}>
            단어 뜻 보기
          </div>
          <div className="HomeButton" onClick={handleHomeClick}>
            홈으로
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerPopup;
