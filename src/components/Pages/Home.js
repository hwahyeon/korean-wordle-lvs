import React, { useState } from "react";
import { Container, Box, Button } from '@mui/material';


function HomePage() {
  const [pred, setPred] = useState([]); // List of input


  const handleButtonClick = (value) => {
    const newItem = {
      value: value,
      deletable: true,
    };
    setPred((pred) => [...pred, newItem]);
  };

  const handleRemoveButtonClick = () => {
    if (pred[pred.length - 1]?.deletable) {
      let updatedList = [...pred];
      updatedList.pop();
      setPred(updatedList);
      }
  }
  
  const handleSubmitButtonClick = () => {
    const updatedList = pred.map((item) => ({
      ...item,
      deletable: false,
    }));
    setPred([...updatedList]);
  }



  return (
    <Container >
      <Box>
        <div>{pred[0]?.value}</div>
        <div>{pred[1]?.value}</div>
        <div>{pred[2]?.value}</div>
        <div>{pred[3]?.value}</div>
        <div>{pred[4]?.value}</div>
      </Box>

      <Box>
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
      <Box>
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
      <Box>
        <Button onClick={() => handleSubmitButtonClick()}>Enter</Button>
        <Button onClick={() => handleButtonClick('ㅋ')}>ㅋ</Button>
        <Button onClick={() => handleButtonClick('ㅌ')}>ㅌ</Button>
        <Button onClick={() => handleButtonClick('ㅊ')}>ㅊ</Button>
        <Button onClick={() => handleButtonClick('ㅍ')}>ㅍ</Button>
        <Button onClick={() => handleButtonClick('ㅠ')}>ㅠ</Button>
        <Button onClick={() => handleButtonClick('ㅜ')}>ㅜ</Button>
        <Button onClick={() => handleButtonClick('ㅡ')}>ㅡ</Button>
        <Button onClick={() => handleRemoveButtonClick()}>Remove</Button>
      </Box>
    </Container>
  );
}

export default HomePage;
