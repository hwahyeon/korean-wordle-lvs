import React from "react";
import { useState } from "react";
import "../../styles/header.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import InfoModal from "../Common/InfoModal.js";

function Header() {
  const navi = useNavigate();
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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
    alert("다크모드는 준비중입니다.");
    setDarkMode(!darkMode)
  };

  return (
    <header className="header">
      <div className="header__icon" onClick={goHome}>
        <FontAwesomeIcon icon={faHome} />
      </div>
      <div className="header__title">
        <p>한글 Wordle</p>
      </div>
      <div className="header__group">
        <div onClick={openInfoModal}>
          <FontAwesomeIcon icon={faInfoCircle} />
        </div>
        <div onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={!darkMode ? faMoon : faSun} />
        </div>
      </div>
      {showInfoModal && <InfoModal onClose={closeInfoModal} />}
    </header>
  );
}

export default Header;
