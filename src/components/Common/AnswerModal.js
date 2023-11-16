import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Content = styled.div`
  padding: 20px;
  background-color: #fff;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex; /* Align children using flex */
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Align children horizontally at the center */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const Button = styled.button`
  /* additional styles for your button */
`;

const AnswerPopup = (props) => {
  const rounds = Math.floor(props.rounds / 5)
  let msg = '';

  switch (rounds) {
    case 1:
      msg = (
        <>
          대단하네요! 첫 시도에 바로 맞추셨어요!<br />
          저기, 혹시 복권 번호 좀 알려줄래요?
        </>
      );
      break;
    case 2:
      msg = (
        <>
          굉장합니다! 단 두 번만에 성공!<br />
          복권 구매를 고려해 보는 건 어떨까요?<br />
          물론 저는 책임지지 않을 겁니다만
        </>
      );
      break;
    case 3:
      msg = (
        <>
          놀라워요! 세 번만에 맞췄어요.<br />
          운인가요? 실력인가요?<br />
          아, 운도 실력이라고요?
        </>
      );
      break;
    case 4:
      msg = (
        <>
          네 번째 시도에 성공하셨군요.<br />
          진짜 재미는 네 번째부터죠!
        </>
      );
      break;
    case 5:
      msg = (
        <>
          다섯 번째 시도에 성공하셨군요.<br />
          뭐예요, 그 여유로워 보이는 표정은?<br />
          긴장 안 했었어요? 정말?
        </>
      );
      break;
    default:
      msg = (
        <>
          휴<br />
          마지막 기회를 놓치지 않으셨군요!<br />
          성공!
        </>
      );
  }

  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  if (!isVisible) return null;

  return (
    <Overlay>
      <Content>
        <CloseButton onClick={handleCloseClick}>&times;</CloseButton>
        <p>{msg}</p>
        <Button onClick={handleHomeClick}>홈</Button>
      </Content>
    </Overlay>
  );
};

export default AnswerPopup;