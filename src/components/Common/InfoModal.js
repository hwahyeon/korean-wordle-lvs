import { Box } from "@mui/material";
import { useState } from "react";
import "../../styles/infoModal.scss";
import styled from "styled-components";

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const InfoModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Box className="overlay">
      <Box className="content">
        <CloseButton onClick={handleCloseClick}>&times;</CloseButton>
        <Box className="howto_text">
          <p>게임하는 방법</p>
          <p>6번의 시도로 숨겨진 글자가 무엇인지 맞춰보세요</p>
          <Box className="examples">
            <p>예시</p>
            <div className="green">ㅎ</div>
            <div>ㅏ</div>
            <div>ㄱ</div>
            <div>ㅡ</div>
            <div>ㄹ</div>
            ㅎ은 단어 안에 있고, 정확한 위치에 있습니다.
            <br></br>
            <div>ㄴ</div>
            <div className="yellow">ㅓ</div>
            <div>ㅇ</div>
            <div>ㅜ</div>
            <div>ㄹ</div>
            ㅓ는 단어 안에 있지만, 잘못된 위치에 있습니다.
            <br></br>
            <div>ㅂ</div>
            <div>ㅏ</div>
            <div className="gray">ㄹ</div>
            <div>ㅣ</div>
            <div>ㅁ</div>
            ㄹ은 단어에 포함되지 않습니다.
            <br></br>
            - 명사만 활용할 수 있습니다.
            - 겹자모는 두 칸을 활용합니다.
            <br></br>
            <p>겹자음 예시</p>
            <div>ㄱ</div>
            <div>ㄱ</div>
            <div>ㅗ</div>
            <div>ㅁ</div>
            <div>ㅏ</div>
            <p>ㄲ은 ㄱㄱ으로 표기합니다.</p>
            <p>겹모음 예시</p>
            <div>ㄱ</div>
            <div>ㅗ</div>
            <div>ㅏ</div>
            <div>ㄱ</div>
            <div>ㅓ</div>
            <p>ㅘ는 ㅗㅏ로 표기합니다.</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoModal;
