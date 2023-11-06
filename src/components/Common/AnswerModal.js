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

const AnswerPopup = () => {
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
        <p>정답입니다.</p>
        <Button onClick={handleHomeClick}>홈</Button>
      </Content>
    </Overlay>
  );
};

export default AnswerPopup;