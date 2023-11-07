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
    z-index: 500;
`;

const Content = styled.div`
    padding: 20px;
    background-color: #fff;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


const FailedPopup = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <Overlay>
      <Content>
        <p>아쉬워요! 다시 도전해보세요!</p>
        <button onClick={handleClick}>홈</button>
      </Content>
    </Overlay>
  )
};

export default FailedPopup;
