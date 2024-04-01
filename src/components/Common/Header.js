// React
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// State
import { useRecoilState } from "recoil";

// Style
import "@styles/components/_header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGlobe,
  faQuestionCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

// Components
import InfoModal from "./InfoModal.js";
import { sidebarState } from "@state/sidebarState.js";
import Sidebar from "./Sidebar.js";

function Header() {
  const navi = useNavigate();
  const [showInfoModal, setShowInfoModal] = useState(false);

  const goHome = () => {
    navi("/");
  };

  const openInfoModal = () => {
    setShowInfoModal(true);
  };

  const closeInfoModal = () => {
    setShowInfoModal(false);
  };

  const handleLangsClick = () => {
    console.log('language')
  }

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
        <div className="icon-items" onClick={handleLangsClick}>
          <FontAwesomeIcon icon={faGlobe} />
        </div>
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
