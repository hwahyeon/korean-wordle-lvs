// React
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// State
import { useRecoilState } from "recoil";
import { sidebarState } from "@state/sidebarState.js";

// Style
import "@styles/components/_header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faQuestionCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
// import ko_flag from "@assets/flags/ko-flag.svg";
// import uk_flag from "@assets/flags/uk-flag.svg";
// import gr_flag from "@assets/flags/gr-flag.svg";
// import de_flag from "@assets/flags/de-flag.svg";

// Components
import InfoModal from "./InfoModal.js";
import Sidebar from "./Sidebar.js";
import LangBtn from "./LangBtn.js";

function Header() {
  const navi = useNavigate();
  const [showInfoModal, setShowInfoModal] = useState(false);
  // const [showLangsOpen, setShowLangsOpen] = useState(false);

  // const [langIcon, setLangIcon] = useState(ko_flag);
  // const [langIconState, setLangIconState] = useState(false);

  // useEffect(() => {
  //   const selectedLang = localStorage.getItem("language") || "ko";
  //   switch (selectedLang) {
  //     case "ko":
  //       setLangIcon(ko_flag);
  //       break;
  //     case "en":
  //       setLangIcon(uk_flag);
  //       break;
  //     case "de":
  //       setLangIcon(de_flag);
  //       break;
  //     case "el":
  //       setLangIcon(gr_flag);
  //       break;
  //     default:
  //       setLangIcon(ko_flag);
  //   }
  // }, [langIconState]);

  const goHome = () => {
    navi("/");
  };

  const openInfoModal = () => {
    setShowInfoModal(true);
  };

  const closeInfoModal = () => {
    setShowInfoModal(false);
  };

  // const handleLangsClick = () => {
  //   setShowLangsOpen(!showLangsOpen);
  // };

  // const handleSelectLangs = (event) => {
  //   localStorage.setItem("language", event.target.value);
  //   setLangIconState(!langIconState);
  // };

  const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarState);
  const [shouldRenderSidebar, setShouldRenderSidebar] = useState(false);

  const handleCloseClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (sidebarOpen) {
      setShouldRenderSidebar(true); // Sidebar 랜더링
    } else {
      // 애니메이션 종료 후 Sidebar 숨기는 로직
      setTimeout(() => {
        setShouldRenderSidebar(false);
      }, 300);
    }
  }, [sidebarOpen]);

  return (
    <div className="header">
      <div className="header__icon-first" onClick={goHome}>
        <FontAwesomeIcon icon={faHome} />
      </div>
      <div className="header__spacer"></div>
      <div className="header__title">
        <p className="header__title-kor" onClick={goHome}>
          한글&nbsp;
        </p>
        <p className="header__title-eng" onClick={goHome}>
          Wordle
        </p>
      </div>
      <div className="header__icon-second">
        <div className="icon-items" onClick={openInfoModal}>
          <FontAwesomeIcon icon={faQuestionCircle} />
        </div>
        <LangBtn />
        {/* <div
          className="icon-items"
          //  onClick={handleLangsClick}
        > */}
          {/* <img src={langIcon} alt="langs-flag" /> */}
        {/* </div> */}
        {/* {showLangsOpen && (
          <div className="language-options">
            <select onChange={handleSelectLangs}>
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="el">Ελληνικά</option>
            </select>
          </div>
        )} */}
        <div className="icon-items" onClick={handleCloseClick}>
          <FontAwesomeIcon icon={faCog} />
        </div>
      </div>
      {shouldRenderSidebar && <Sidebar />}
      {showInfoModal && <InfoModal onClose={closeInfoModal} />}
    </div>
  );
}

export default Header;
