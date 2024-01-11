import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container } from "@mui/material";
import "../../styles/pages/_home.scss";
import icon from "../../assets/wordleicon.svg";
import Header from "../Common/Header";

function HomePage() {
  const navigate = useNavigate();

  const handleEasyClick = () => {
    navigate("/play/easy");
  };

  const handleImdtClick = () => {
    navigate("/play/imdt");
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
      <div className="content">
        <img src={icon} alt="icon" className="icon" />
        <p className="cont_txt">이 게임은 Wordle의 한글 변형판입니다</p>
        <div>
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
        </div>
        <div>
          <p>매일 12시 정각에 정답이 바뀌어요</p>
          <p className="date">{currentDateTime.date}</p>
          <p className="edit">Made by hwahyeon</p>
        </div>
        <div className="ref">
          <button
            className="alink_button"
            component={Link}
            onClick={() =>
              (window.location.href =
                "https://github.com/hwahyeon/reactjs-wordle-kor")
            }
          >
            Code of this game
          </button>
          <button
            className="alink_button"
            onClick={() =>
              (window.location.href =
                "https://www.nytimes.com/games/wordle/index.html")
            }
          >
            Original Wordle
          </button>
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
