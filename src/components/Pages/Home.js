// React
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// MUI
import { Container } from "@mui/material";

// Style
import "../../styles/pages/_home.scss";

// Component
import Header from "../Common/Header";

// State
import { useRecoilValue } from "recoil";
import { colorModeState, darkModeState } from "../../state/themeState";

// Images
import iconNormal from "../../assets/wordle-icon.svg";
import iconDark from "../../assets/wordle-icon-dark.svg";
import iconColor from "../../assets/wordle-icon-color.svg";
import iconBoth from "../../assets/wordle-icon-both.svg";

function HomePage() {
  const navigate = useNavigate();

  const darkMode = useRecoilValue(darkModeState);
  const colorMode = useRecoilValue(colorModeState);
  const icon = darkMode && colorMode ? iconBoth
              : darkMode ? iconDark
              : colorMode ? iconColor
              : iconNormal;

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
    <Container className="homepage">
      <Header />
      <div className="homepage__content">
        <img src={icon} alt="wordle icon" className="cont__icon" />
        <p className="cont__txt">이 게임은 Wordle의 한글 변형판입니다</p>
        <div>
          <p className="text-start">시작해볼까요?</p>
          <p className="text-level">난이도를 선택하세요</p>
          <button className="play-button" onClick={handleEasyClick}>
            초급
          </button>
          <button className="play-button" onClick={handleImdtClick}>
            중급
          </button>
          <button className="play-button" onClick={handleHardClick}>
            고급
          </button>
        </div>
        <div>
          <p>매일 12시 정각에 정답이 바뀌어요</p>
          <p className="text-date">{currentDateTime.date}</p>
          <p className="text-edit">Made by hwahyeon</p>
        </div>
        <div className="ref">
          <button
            className="alink-button"
            component={Link}
            onClick={() =>
              (window.location.href =
                "https://github.com/hwahyeon/reactjs-wordle-kor")
            }
          >
            Code of this game
          </button>
          <button
            className="alink-button"
            component={Link}
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
