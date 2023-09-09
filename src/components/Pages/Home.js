import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Button, Typography as P } from '@mui/material';

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/play');
  };

  const [currentDateTime, setCurrentDateTime] = useState(() => {
    const now = new Date();
    return {
      date: now.toLocaleDateString(),
      // time: now.toLocaleTimeString(),
    };
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentDateTime({
        date: now.toLocaleDateString(),
        // time: now.toLocaleTimeString(),
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <P>한글 Korean Wordle</P>
      <Button onClick={handleClick}>시작해볼까요?</Button>
      <Box>
        <P>이 게임은 Wordle의 한글 변형판입니다. 영어로 된 오리지널 Wordle은 여기로. 한글 Korean Wordle의 소스코드는 여기로</P>
        <P>{currentDateTime.date}</P>
        <P>Edited by Hwahyeon</P>
      </Box>
    </Container>
  );
}

export default HomePage;