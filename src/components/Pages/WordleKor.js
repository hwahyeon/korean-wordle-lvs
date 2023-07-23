import React, { useState } from "react";
import { Container, Box, Button } from '@mui/material';
import '../../styles/wordleKor.scss';

function WordleKorPage() {
  const [pred, setPred] = useState([]); // List of input
  const [colorList, setColorList] = useState([]) // List of color
  const [listLen, setListLen] = useState(5);

  const answer = ['ㅇ', 'ㅏ', 'ㄴ', 'ㄴ', 'ㅏ']

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

      let updatedColorList = []
      for (let i = listLen - 5; i < listLen; i++){
        if(answer[i - listLen + 5] === pred[i]?.value) {
          updatedColorList.push('green')
        } else if (answer.includes(pred[i]?.value)){
          updatedColorList.push('yellow')
        } else {
          updatedColorList.push('gray')
        }
      }
      setColorList(colorList.concat(updatedColorList))
      console.log(colorList)
    }
  }

  const myButtons1 = [
    { id: 1, value: 'ㅂ' },
    { id: 2, value: 'ㅈ' },
    { id: 3, value: 'ㄷ' },
    { id: 4, value: 'ㄱ' },
    { id: 5, value: 'ㅅ' },
    { id: 6, value: 'ㅛ' },
    { id: 7, value: 'ㅕ' },
    { id: 8, value: 'ㅑ' },
    { id: 9, value: 'ㅐ' },
    { id: 10, value: 'ㅔ' },
  ];

    const myButton2 = [
      { id: 11, value: 'ㅁ' },
      { id: 12, value: 'ㄴ' },
      { id: 13, value: 'ㅇ' },
      { id: 14, value: 'ㄹ' },
      { id: 15, value: 'ㅎ' },
      { id: 16, value: 'ㅗ' },
      { id: 17, value: 'ㅓ' },
      { id: 18, value: 'ㅏ' },
      { id: 19, value: 'ㅣ' },
    ];

    const myButton3 = [
      { id: 20, value: 'ㅋ' },
      { id: 21, value: 'ㅌ' },
      { id: 22, value: 'ㅊ' },
      { id: 23, value: 'ㅍ' },
      { id: 24, value: 'ㅠ' },
      { id: 25, value: 'ㅜ' },
      { id: 26, value: 'ㅡ' },
    ];

  return (
    <Container className="WorldKorPage">
      <Box className="AnswerBox">
        <div className={`${colorList[0]}`}>{pred[0]?.value}</div>
        <div className={`${colorList[1]}`}>{pred[1]?.value}</div>
        <div className={`${colorList[2]}`}>{pred[2]?.value}</div>
        <div className={`${colorList[3]}`}>{pred[3]?.value}</div>
        <div className={`${colorList[4]}`}>{pred[4]?.value}</div>
      </Box>
      <Box className="AnswerBox">
        <div className={`${colorList[5]}`}>{pred[5]?.value}</div>
        <div className={`${colorList[6]}`}>{pred[6]?.value}</div>
        <div className={`${colorList[7]}`}>{pred[7]?.value}</div>
        <div className={`${colorList[8]}`}>{pred[8]?.value}</div>
        <div className={`${colorList[9]}`}>{pred[9]?.value}</div>
      </Box>
      <Box className="AnswerBox">
        <div className={`${colorList[10]}`}>{pred[10]?.value}</div>
        <div className={`${colorList[11]}`}>{pred[11]?.value}</div>
        <div className={`${colorList[12]}`}>{pred[12]?.value}</div>
        <div className={`${colorList[13]}`}>{pred[13]?.value}</div>
        <div className={`${colorList[14]}`}>{pred[14]?.value}</div>
      </Box>
      <Box className="AnswerBox">
        <div className={`${colorList[15]}`}>{pred[15]?.value}</div>
        <div className={`${colorList[16]}`}>{pred[16]?.value}</div>
        <div className={`${colorList[17]}`}>{pred[17]?.value}</div>
        <div className={`${colorList[18]}`}>{pred[18]?.value}</div>
        <div className={`${colorList[19]}`}>{pred[19]?.value}</div>
      </Box>
      <Box className="AnswerBox">
        <div className={`${colorList[20]}`}>{pred[20]?.value}</div>
        <div className={`${colorList[21]}`}>{pred[21]?.value}</div>
        <div className={`${colorList[22]}`}>{pred[22]?.value}</div>
        <div className={`${colorList[23]}`}>{pred[23]?.value}</div>
        <div className={`${colorList[24]}`}>{pred[24]?.value}</div>
      </Box>
      <Box className="keyBoard">
        <Box className="raw1">
          {myButtons1.map((button) => (
            <Button key={button.id} onClick={() => handleButtonClick(button.value)} value={button.value} className={``}>
              {button.value}
            </Button>
          ))}
        </Box>
        <Box className="raw2">
          {myButton2.map((button) => (
            <Button key={button.id} onClick={() => handleButtonClick(button.value)} value={button.value} className={``}>
              {button.value}
            </Button>
          ))}
        </Box>
        <Box className="raw3">
          <Button onClick={() => handleSubmitButtonClick()}>제출</Button>
          {myButton3.map((button) => (
            <Button key={button.id} onClick={() => handleButtonClick(button.value)} value={button.value} className={``}>
              {button.value}
            </Button>
          ))}
          <Button onClick={() => handleRemoveButtonClick()}>지우기</Button>
        </Box>
        
      </Box>
    </Container>
  );
}

export default WordleKorPage;
