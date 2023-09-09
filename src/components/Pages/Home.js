import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Button, Typography as P } from '@mui/material';
import '../../styles/home.scss';

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
    <Container className='HomePage'>
      <Box className='content'>
        <P className='header'>한글 Korean Wordle</P>
        <Button className='play_button' onClick={handleClick}>시작해볼까요?</Button>
        <Box>
          <P>이 게임은 Wordle의 한글 변형판입니다</P>
          <P>소스코드는 이쪽, 영어로 된 오리지널 Wordle은 여기로</P>
          <P className='date'>{currentDateTime.date}</P>
          <P className='edit'>Edited by hwahyeon</P>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;