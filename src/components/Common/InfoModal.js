// React
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Style
import "../../styles/components/_infoModal.scss";

// Pages
import PageOne from "../modalPages/InfoPageOne";
import PageTwo from "../modalPages/InfoPageTwo";
import PageThree from "../modalPages/InfoPageThree";
import PageFour from "../modalPages/InfoPageFour";
import PageFive from "../modalPages/InfoPageFive";
import PageSix from "../modalPages/InfoPageSix";

// Message
import CentralMessage from "./CentralMessage";
import { ko } from "../../lang/ko.js";
import { en } from "../../lang/en.js";

const InfoModal = ({ onClose }) => {
  const currentLang = localStorage.getItem("language") || "ko";
  const lang = currentLang === "ko" ? ko : en;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const firstPage = () => {
    setCurrentPage(2);
  };

  function showMessage() {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }

  const gamePage = () => {
    if (location.pathname.includes("/play")) {
      showMessage();
    }

    navigate("/play/easy");
  };

  return (
    <div className="overlay">
      <div className="info__modal">
        <button className="close--btn" onClick={onClose}>
          &times;
        </button>

        {currentPage === 1 && <PageOne />}
        {currentPage === 2 && <PageTwo />}
        {currentPage === 3 && <PageThree />}
        {currentPage === 4 && <PageFour />}
        {currentPage === 5 && <PageFive />}
        {currentPage === 6 && <PageSix />}

        <div className="navigation">
          {currentPage === 1 && (
            <button className="prev--btn" onClick={firstPage}>
              {lang.button.example}
            </button>
          )}
          {currentPage > 1 && (
            <button className="prev--btn" onClick={prevPage}>
              &#8592; {lang.button.prev}
            </button>
          )}
          {currentPage < totalPages && currentPage !== 1 && (
            <button className="next--btn" onClick={nextPage}>
              {lang.button.next} &#8594;
            </button>
          )}
          {currentPage === 6 && (
            <button className="next--btn" onClick={gamePage}>
              {lang.button.start}
            </button>
          )}
        </div>
      </div>
      {isVisible ? (
        <CentralMessage message={lang.center_msg.play_block} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default InfoModal;
