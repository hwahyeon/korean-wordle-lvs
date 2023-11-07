import { Box, Typography as P } from "@mui/material";
import { useState } from "react";
import "../../styles/infoModal.scss";

const InfoModal = ({ onClose }) => {
  // const [isVisible, setIsVisible] = useState(true);

  // const handleCloseClick = () => {
  //   setIsVisible(false);
  // };

  // if (!isVisible) return null;

  return (
    <Box className="overlay">
      <Box className="content">
        <button className="closeButton" onClick={onClose}>
          &times;
        </button>
        <Box className="howto_text">
          <P className="header_text">게임하는 방법</P>
          <P>6번의 시도로 숨겨진 글자(명사)를 맞춰보세요</P>
          <P className="header_sec_text">색상은 정답의 단서가 됩니다.</P>
          <Box className="examples">
            <div className="green">ㅎ</div>
            <div>ㅏ</div>
            <div>ㄴ</div>
            <div>ㅡ</div>
            <div>ㄹ</div>
            <P className="explain_text">
              ㅎ은 단어 안에 있고, 정확한 위치에 있습니다.
            </P>
            <div>ㄴ</div>
            <div className="yellow">ㅓ</div>
            <div>ㅇ</div>
            <div>ㅜ</div>
            <div>ㄹ</div>
            <P className="explain_text">
              ㅓ는 단어 안에 있지만, 잘못된 위치에 있습니다.
            </P>
            <div>ㅂ</div>
            <div>ㅏ</div>
            <div className="gray">ㄹ</div>
            <div>ㅣ</div>
            <div>ㅁ</div>
            <P className="explain_text">ㄹ은 단어에 포함되지 않습니다.</P>
            <P className="header_sec_text">겹자모는 두 칸을 활용합니다.</P>
            <div>ㄱ</div>
            <div>ㄱ</div>
            <div>ㅗ</div>
            <div>ㅁ</div>
            <div>ㅏ</div>
            <P className="explain_text">ㄲ은 ㄱㄱ으로 표기합니다.</P>
            <div>ㄱ</div>
            <div>ㅗ</div>
            <div>ㅏ</div>
            <div>ㄱ</div>
            <div>ㅓ</div>
            <P className="explain_text">ㅘ는 ㅗㅏ로 표기합니다.</P>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoModal;
