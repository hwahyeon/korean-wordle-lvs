import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/components/_modal.scss";
import dictionary from "../../assets/dictionary.json";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AnswerPopup = (props) => {
  const rounds = Math.floor(props.rounds / 5);
  let msg = "";

  switch (rounds) {
    case 1:
      msg = (
        <>
          대단한 운!
          <br />
          첫 시도에 바로 맞추셨어요!
          <br />
          저기, 혹시 복권 번호 좀 알려줄래요?😏
        </>
      );
      break;
    case 2:
      msg = (
        <>
          굉장합니다! 단 두 번만에 성공!
          <br />
          복권 구매를 고려해 보는 건 어떨까요?
          <br />
          (물론 저는 책임지지 않을 겁니다만 😉)
        </>
      );
      break;
    case 3:
      msg = (
        <>
          놀라워요! 세 번만에 맞췄어요.
          <br />
          운인가요? 실력인가요?
          <br />
          아, 운도 실력이라고요?😎
        </>
      );
      break;
    case 4:
      msg = (
        <>
          네 번째 시도에 성공하셨군요.
          <br />
          진짜 재미는 네 번째부터죠!🤩
        </>
      );
      break;
    case 5:
      msg = (
        <>
          다섯 번째 시도에 성공하셨군요.
          <br />
          표정이 여유로워 보이진 않는데...
          <br />
          긴장 안 했다고요? 정말?🤨
        </>
      );
      break;
    default:
      msg = (
        <>
          휴
          <br />
          마지막 기회를 놓치지 않으셨군요!
          <br />
          성공!🤗
        </>
      );
  }

  const [isVisible, setIsVisible] = useState(true);
  const [failAnwser] = useState(props.fail);
  const [isMeanWord, setIsMeanWord] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false); // 텍스트 확장 상태

  const navigate = useNavigate();

  const toggleExpand = () => {
    setIsExpanded(true);
  };

  const maxLength = 55;

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleWordsMeaningClick = () => {
    setIsMeanWord(true);
  };

  const handleNoWordsMeaningClick = () => {
    setIsMeanWord(false);
  };

  function getMeaningForKey(json, searchKey) {
    const items = json.filter((item) => item.key === searchKey);
    return items.map((item) => {
      return {
        mean: item.mean,
        original: item.original,
      };
    });
  }

  const meaning = getMeaningForKey(dictionary, props.answer);

  if (!isVisible) return null;

  const totalPages = meaning.length;

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`pagination-btn ${currentPage === i ? "active" : ""}`}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="Overlay">
      {!!isMeanWord ? (
        <div className="Content">
          <div className="CloseButton" onClick={handleCloseClick}>
            &times;
          </div>
          <p className="AnswerWord">
            <p>{props.answer}</p>
            <p className="Original">{meaning[currentPage - 1].original}</p>
          </p>

          {/* Meaning of words */}
          <div className={`AnswerMeaning ${isExpanded ? '' : 'more_active'}`} onClick={toggleExpand}>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  isExpanded ||
                  meaning[currentPage - 1].mean.length <= maxLength
                    ? meaning[currentPage - 1].mean
                    : meaning[currentPage - 1].mean.substring(0, maxLength) +
                      "...▼",
              }}
            ></div>
          </div>

          {/* 페이지 번호 */}
          <div className="pagination-btn">{renderPageNumbers()}</div>
          <div className="Buttons">
            <div className="HomeButton" onClick={handleNoWordsMeaningClick}>
              뒤로 가기
            </div>
            <div className="HomeButton" onClick={handleHomeClick}>
              홈으로
            </div>
          </div>
        </div>
      ) : !failAnwser ? (
        <div className="Content">
          <div className="CloseButton" onClick={handleCloseClick}>
            &times;
          </div>
          <div className="content_txt">
            <p>{msg}</p>
          </div>
          <div className="Buttons">
            <div className="HomeButton" onClick={handleWordsMeaningClick}>
              단어 뜻 보기
            </div>
            <div className="HomeButton" onClick={handleHomeClick}>
              홈으로
            </div>
          </div>
        </div>
      ) : (
        <div className="Content">
          <div className="CloseButton" onClick={handleCloseClick}>
            &times;
          </div>
          <div className="content_txt">
            <p>아쉬워요! 다시 도전해보세요!😔</p>
          </div>
          <div className="Buttons">
            <div className="HomeButton" onClick={handleHomeClick}>
              홈으로
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnswerPopup;
