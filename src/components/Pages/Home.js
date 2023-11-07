import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Box, Typography as P } from "@mui/material";
import "../../styles/home.scss";
import icon from "../../assets/wordleicon.svg";
import Header from "../Common/Header";

function HomePage() {
  const navigate = useNavigate();

  const handleEasyClick = () => {
    navigate("/play/easy");
  };

  const handleImdtClick = () => {
    navigate('/play/imdt');
  };

  const handleHardClick = () => {
    navigate("/play/hard");
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
    <Container className="HomePage">
      <Header />
      <Box className="content">
        <img src={icon} alt="icon" className="icon" />
        <p className="cont_txt">이 게임은 Wordle의 한글 변형판입니다</p>
        <Box>
          <p className="start_text">시작해볼까요?</p>
          <p className="level_text">난이도를 선택하세요</p>
          <button className="play_button" onClick={handleEasyClick}>
            초급
          </button>
          <button className="play_button" onClick={handleImdtClick}>
            중급
          </button>
          <button className="play_button" onClick={handleHardClick}>
            고급
          </button>
        </Box>
        <Box>
          <P className="date">{currentDateTime.date}</P>
          <P className="edit">Made by hwahyeon</P>
        </Box>
        <Box className="ref">
          <button
            className="alink_button"
            component={Link}
            to="https://github.com/hwahyeon/reactjs-wordle-kor"
          >
            Code of this game
          </button>
          <button
            className="alink_button"
            component={Link}
            to="https://www.nytimes.com/games/wordle/index.html"
          >
            Original Wordle
          </button>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
