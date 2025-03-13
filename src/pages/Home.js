// React
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Style
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
    <div className="homepage">
      <Helmet>
        <title>한글 Wordle | Home</title>
        <meta
          name="description"
          content="Wordle game for the Korean language with three levels of difficulty"
        />
      </Helmet>
      <Header />
      <div className="homepage__content">
        <img src={icon} alt="wordle icon" className="homepage__icon" />
        <h1 className="homepage__text">{lang.home1}</h1>
        <div>
          <p className="homepage__text homepage__text--start">{lang.home2}</p>
          <p className="homepage__text homepage__text--level">{lang.home3}</p>
          <button
            className="homepage__button"
            onClick={() => handleNavigation("easy")}
          >
            {lang.lv1}
          </button>
          <button
            className="homepage__button"
            onClick={() => handleNavigation("imdt")}
          >
            {lang.lv2}
          </button>
          <button
            className="homepage__button"
            onClick={() => handleNavigation("hard")}
          >
            {lang.lv3}
          </button>
        </div>
        <div>
          <p className="homepage__text">{lang.home4}</p>
          <p className="homepage__text homepage__text--date">
            {currentDateTime.date}
          </p>
          <p className="homepage__text homepage__text--edit">
            Made by hwahyeon
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
