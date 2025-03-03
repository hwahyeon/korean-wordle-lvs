// React
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Style
import { Container } from "@mui/material";
import "@styles/pages/_home.scss";

// Component
import Header from "@components/Header";
import { Helmet } from "react-helmet";

// State
import { useRecoilValue } from "recoil";
import { colorModeState, darkModeState } from "@state/themeState";

// Images
import iconNormal from "@assets/wordle-icon.svg";
import iconDark from "@assets/wordle-icon-dark.svg";
import iconColor from "@assets/wordle-icon-color.svg";
import iconBoth from "@assets/wordle-icon-both.svg";

import { useLanguage } from "@contexts/LanguageContext";

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

  const handleNavigation = (difficulty) => {
    navigate(`/play/${difficulty}`);
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
      <Helmet>
        <title>한글 Wordle | Home</title>
        <meta
          name="description"
          content="Wordle game for the Korean language with three levels of difficulty"
        />
      </Helmet>
      <Header />
      <div className="homepage__content">
        <img src={icon} alt="wordle icon" className="cont__icon" />
        <h1 className="cont__txt">{lang.home1}</h1>
        <div>
          <p className="text-start">{lang.home2}</p>
          <p className="text-level">{lang.home3}</p>
          <button
            className="play-button"
            onClick={() => handleNavigation("easy")}
          >
            {lang.lv1}
          </button>
          <button
            className="play-button"
            onClick={() => handleNavigation("imdt")}
          >
            {lang.lv2}
          </button>
          <button
            className="play-button"
            onClick={() => handleNavigation("hard")}
          >
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
