// React
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// State
import { useRecoilState } from "recoil";
import { darkModeState, colorModeState } from "../../state/themeState.js";

// Style
import "../../styles/components/_header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faSun,
  faMoon,
  faAdjust,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

// Components
import InfoModal from "./InfoModal.js";

function Header() {
  const navi = useNavigate();
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const [colorMode, setColorMode] = useRecoilState(colorModeState);

  const goHome = () => {
    navi("/");
  };

  const openInfoModal = () => {
    setShowInfoModal(true);
  };

  const closeInfoModal = () => {
    setShowInfoModal(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleColorMode = () => {
    setColorMode(!colorMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    if (colorMode) {
      document.body.classList.add("color-mode");
    } else {
      document.body.classList.remove("color-mode");
    }
  }, [colorMode]);

  return (
    <header className="header">
      <div className="header__icon-first" onClick={goHome}>
        <FontAwesomeIcon icon={faHome} />
      </div>
      <div className="header__spacer"></div>
      <div className="header__title" >
        <p className="header__title-kor" onClick={goHome}>한글&nbsp;</p>
        <p className="header__title-eng" onClick={goHome}>Wordle</p>
      </div>
      <div className="header__icon-second">
        <div className="icon-items" onClick={openInfoModal}>
          <FontAwesomeIcon icon={faInfoCircle} />
        </div>
        <div className="icon-items" onClick={toggleColorMode}>
          <FontAwesomeIcon icon={!colorMode ? faAdjust : faEye} />
        </div>
        <div className="icon-items" onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={!darkMode ? faMoon : faSun} />
        </div>
      </div>
      {showInfoModal && <InfoModal onClose={closeInfoModal} />}
    </header>
  );
}

export default Header;
