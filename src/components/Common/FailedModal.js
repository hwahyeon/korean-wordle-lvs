import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/modal.scss";

const FailedPopup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const handleCloseClick = () => {
    setIsVisible(false);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  if (!isVisible) return null;

  return (
    <div className="Overlay">
      <div className="Content">
        <div className="CloseButton" onClick={handleCloseClick}>
          &times;
        </div>
        <div className="content_txt">
          <p>아쉬워요! 다시 도전해보세요!</p>
        </div>
        <div className="HomeButton" onClick={handleHomeClick}>
          홈
        </div>
      </div>
    </div>
  );
};

export default FailedPopup;
