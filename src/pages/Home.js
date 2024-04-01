// React
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Style
import { Container } from "@mui/material";
import "@styles/pages/_home.scss";

// Component
import Header from "@components/Header";

// State
import { useRecoilValue } from "recoil";
import { colorModeState, darkModeState } from "@state/themeState";

// Images
import iconNormal from "@assets/wordle-icon.svg";
import iconDark from "@assets/wordle-icon-dark.svg";
import iconColor from "@assets/wordle-icon-color.svg";
import iconBoth from "@assets/wordle-icon-both.svg";

import { useLanguage } from '@contexts/LanguageContext';

function HomePage() {
  const { lang } = useLanguage();
  const navigate = useNavigate();

  // const currentLang = localStorage.getItem("language") || "ko";
  // const lang = currentLang === "ko" ? ko : en;

  const darkMode = useRecoilValue(darkModeState);
  const colorMode = useRecoilValue(colorModeState);
  const icon =
    darkMode && colorMode
      ? iconBoth
      : darkMode
      ? iconDark
      : colorMode
      ? iconColor
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
        <p className="cont__txt">{lang.home1}</p>
        <div>
          <p className="text-start">{lang.home2}</p>
          <p className="text-level">{lang.home3}</p>
          <button className="play-button" onClick={handleEasyClick}>
            {lang.lv1}
          </button>
          <button className="play-button" onClick={handleImdtClick}>
            {lang.lv2}
          </button>
          <button className="play-button" onClick={handleHardClick}>
            {lang.lv3}
          </button>
        </div>
        <div>
          <p>{lang.home4}</p>
          <p className="text-date">{currentDateTime.date}</p>
          <p className="text-edit">Made by hwahyeon</p>
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
