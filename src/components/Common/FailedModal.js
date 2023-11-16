import React, { useState } from "react";
import styled from "styled-components";
import { Box, Button, Typography as P } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';


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

const HomeButton = styled.button`
  /* additional styles for your button */
`;

const FailedPopup = () => {
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
        <p>아쉬워요! 다시 도전해보세요!</p>
        <Button onClick={handleHomeClick}>홈으로 돌아가기</Button>
      </Content>
    </Overlay>
  )
};

export default FailedPopup;
