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

// Components
import InfoModal from "./InfoModal.js";
import Sidebar from "./Sidebar.js";
import LangBtn from "./LangBtn.js";

function Header() {
  const navi = useNavigate();
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarState);
  const [shouldRenderSidebar, setShouldRenderSidebar] = useState(false);

  const goHome = () => {
    navi("/");
  };

  const toggleInfoModal = () => setShowInfoModal((prev) => !prev);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  useEffect(() => {
    if (sidebarOpen) {
      setShouldRenderSidebar(true);
    } else {
      const timer = setTimeout(() => {
        setShouldRenderSidebar(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [sidebarOpen]);

  return (
    <div className="header-container">
      <div className="header">
        <div className="header__icon-first" onClick={goHome}>
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div className="header__title" onClick={goHome}>
          <p className="header__title--kor">한글&nbsp;</p>
          <p className="header__title--eng">Wordle</p>
        </div>
        <div className="header__icon-second">
          <div className="icon-items" onClick={toggleInfoModal}>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
          <div className="icon-items">
            <LangBtn />
          </div>
          <div className="icon-items" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faCog} />
          </div>
        </div>
        {shouldRenderSidebar && <Sidebar />}
        {showInfoModal && <InfoModal onClose={toggleInfoModal} />}
      </div>
    </div>
  );
}

export default Header;
