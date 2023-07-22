import React, { useState } from "react";
import { Container, Box, Button } from '@mui/material';
import '../../styles/wordleKor.scss';

function WordleKorPage() {
  const [pred, setPred] = useState([]); // List of input
  const [listLen, setListLen] = useState(5);

  const handleButtonClick = (value) => {
    if (pred.length < listLen){
      const newItem = {
        value: value,
        deletable: true,
      };
      setPred((pred) => [...pred, newItem]);
    } else {
      alert('입력값을 초과했습니다.')
    }
  };

  const handleRemoveButtonClick = () => {
    if (pred[pred.length - 1]?.deletable) {
      let updatedList = [...pred];
      updatedList.pop();
      setPred(updatedList);
      }
  }
  
  const handleSubmitButtonClick = () => {
    if (pred.length % 5 !== 0){
      alert('글자가 적어요')
    } else {
      const updatedList = pred.map((item) => ({
        ...item,
        deletable: false,
      }));
      setPred([...updatedList]);
      setListLen((listLen) => listLen + 5);
    }
  }



  return (
    <Container className="WorldKorPage">
      <Box className="AnswerBox">
        <div>{pred[0]?.value}</div>
        <div>{pred[1]?.value}</div>
        <div>{pred[2]?.value}</div>
        <div>{pred[3]?.value}</div>
        <div>{pred[4]?.value}</div>
      </Box>
      <Box className="AnswerBox">
        <div>{pred[5]?.value}</div>
        <div>{pred[6]?.value}</div>
        <div>{pred[7]?.value}</div>
        <div>{pred[8]?.value}</div>
        <div>{pred[9]?.value}</div>
      </Box>
      <Box className="keyBoard">
        <Box className="raw1">
          <Button onClick={() => handleButtonClick('ㅂ')}>ㅂ</Button>
          <Button onClick={() => handleButtonClick('ㅈ')}>ㅈ</Button>
          <Button onClick={() => handleButtonClick('ㄷ')}>ㄷ</Button>
          <Button onClick={() => handleButtonClick('ㄱ')}>ㄱ</Button>
          <Button onClick={() => handleButtonClick('ㅅ')}>ㅅ</Button>
          <Button onClick={() => handleButtonClick('ㅛ')}>ㅛ</Button>
          <Button onClick={() => handleButtonClick('ㅕ')}>ㅕ</Button>
          <Button onClick={() => handleButtonClick('ㅑ')}>ㅑ</Button>
          <Button onClick={() => handleButtonClick('ㅐ')}>ㅐ</Button>
          <Button onClick={() => handleButtonClick('ㅔ')}>ㅔ</Button>
        </Box>
        <Box className="raw2">
          <Button onClick={() => handleButtonClick('ㅁ')}>ㅁ</Button>
          <Button onClick={() => handleButtonClick('ㄴ')}>ㄴ</Button>
          <Button onClick={() => handleButtonClick('ㅇ')}>ㅇ</Button>
          <Button onClick={() => handleButtonClick('ㄹ')}>ㄹ</Button>
          <Button onClick={() => handleButtonClick('ㅎ')}>ㅎ</Button>
          <Button onClick={() => handleButtonClick('ㅗ')}>ㅗ</Button>
          <Button onClick={() => handleButtonClick('ㅓ')}>ㅓ</Button>
          <Button onClick={() => handleButtonClick('ㅏ')}>ㅏ</Button>
          <Button onClick={() => handleButtonClick('ㅣ')}>ㅣ</Button>
        </Box>
        <Box className="raw3">
          <Button onClick={() => handleSubmitButtonClick()}>제출</Button>
          <Button onClick={() => handleButtonClick('ㅋ')}>ㅋ</Button>
          <Button onClick={() => handleButtonClick('ㅌ')}>ㅌ</Button>
          <Button onClick={() => handleButtonClick('ㅊ')}>ㅊ</Button>
          <Button onClick={() => handleButtonClick('ㅍ')}>ㅍ</Button>
          <Button onClick={() => handleButtonClick('ㅠ')}>ㅠ</Button>
          <Button onClick={() => handleButtonClick('ㅜ')}>ㅜ</Button>
          <Button onClick={() => handleButtonClick('ㅡ')}>ㅡ</Button>
          <Button onClick={() => handleRemoveButtonClick()}>지우기</Button>
        </Box>
      </Box>
    </Container>
  );
}

export default WordleKorPage;
