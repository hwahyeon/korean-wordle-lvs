import React, { useEffect } from "react";
import "../../styles/components/_sidebar.scss";
import { useRecoilState } from "recoil";
import { sidebarState } from "../../state/sidebarState";
import Toggle from "./Toggle";
import { colorModeState, darkModeState } from "../../state/themeState";

function Sidebar() {
  // sidebar
  const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarState);

  const handleCloseClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // darkmode
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // colormode
  const [colorMode, setColorMode] = useRecoilState(colorModeState);

  const handleColorModeToggle = () => {
    setColorMode(!colorMode);
  };

  useEffect(() => {
    if (colorMode) {
      document.body.classList.add("color-mode");
    } else {
      document.body.classList.remove("color-mode");
    }
  }, [colorMode]);

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : "close"}`}>
      <div className="sidebar-right">
        <div className="sidebar-content">
          <div className="close--btn" onClick={handleCloseClick}>
            &times;
          </div>
          <div className="sidebar-title">Settings</div>
          <Toggle
            title="Dark Theme"
            description=""
            isOn={darkMode}
            onChange={handleDarkModeToggle}
          />
          <hr />
          <Toggle
            title="High Contrast Mode"
            description="Contrast and colorblindness improvements"
            isOn={colorMode}
            onChange={handleColorModeToggle}
          />
          <hr />
          {/* <Toggle
            title="Onscreen Keyboard Input Only"
            description="Ignore key input except from the onscreen keyboard. Most helpful for users using speech recognition or other assistive devices."
          />
          <hr />
          <Toggle
            title="Language"
            description="한국어를 학습하려는 외국인을 위하여 영어도 제공합니다."
          /> */}
          <hr />
          <div className="sidebar-option">
            <span className="option-title">Report a Bug</span>
            <a
              href="https://github.com/hwahyeon/reactjs-wordle-kor/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </div>
          <hr />
          <div className="sidebar-option">
            <span className="option-title">Original Wordle</span>
            <a
              href="https://www.nytimes.com/games/wordle/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </div>
        </div>
      </div>
      <div className="sidebar-left" onClick={handleCloseClick}></div>
    </div>
  );
}

export default Sidebar;
