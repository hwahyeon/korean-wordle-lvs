import { useState } from "react";
import "../../styles/components/_info-modal.scss";
import PageOne from "../ModalPages/InfoPageOne";
import PageTwo from "../ModalPages/InfoPageTwo";
import PageThree from "../ModalPages/InfoPageThree";
import PageFour from "../ModalPages/InfoPageFour";
import PageFive from "../ModalPages/InfoPageFive";
import PageSix from "../ModalPages/InfoPageSix";
import { useLocation, useNavigate } from "react-router-dom";
import CentralMessage from "./CentralMessage";

const InfoModal = ({ onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const centerMsg = "이미 게임을 실행하고 있습니다. 닫기 버튼을 눌러주세요";

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
          {currentPage == 1 && (
            <button className="prev--btn" onClick={firstPage}>
              함께 해보기
            </button>
          )}
          {currentPage > 1 && (
            <button className="prev--btn" onClick={prevPage}>
              &#8592; 이전
            </button>
          )}
          {(currentPage < totalPages && currentPage !== 1)&& (
            <button className="next--btn" onClick={nextPage}>
              다음 &#8594;
            </button>
          )}
          {currentPage === 6 && (
            <button className="next--btn" onClick={gamePage}>
              게임 시작
            </button>
          )}
        </div>
      </div>
      {isVisible ? <CentralMessage message={centerMsg} /> : <div></div>}
    </div>
  );
};

export default InfoModal;
