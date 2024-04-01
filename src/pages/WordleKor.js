// React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// style
import { Box } from "@mui/material";
import "@styles/pages/_wordleKor.scss";

// Components
import Header from "@components/Header.js";
import CentralMessage from "@components/CentralMessage.js";
import AnswerPopup from "@components/AnswerModal.js";
import Keyboard from "@components/Keyboard.js";

// Function & Data
import getDailyRandomNumber from "@utils/randomNumber.js";
import hardMode from "@assets/hard-mode.json";
import imdtMode from "@assets/imdt-mode.json";
import easyMode from "@assets/easy-mode.json";
import allDeposedWords from "@assets/all-deposed-words.json";

// Lang
import { useLanguage } from "@contexts/LanguageContext";

function WordleKorPage() {
  const { lang } = useLanguage();
  const [pred, setPred] = useState([]); // List of input
  const [colorList, setColorList] = useState([]); // List of color
  const [listLen, setListLen] = useState(5);
  const [isVisible, setIsVisible] = useState(false);
  const [centerMsg, setCenterMsg] = useState("");
  const [gotAnswer, setGotAnwser] = useState(false);
  const [failAnwser, setFailAnwser] = useState(false);

  const MAX_PRED_LENGTH = 30;

  useEffect(() => {}, [failAnwser]);

  // Adjust selected mode
  const { mode } = useParams();
  const jsonData = allDeposedWords;
  let dict_answer = hardMode[getDailyRandomNumber.randomNumberAnswer(hardMode)];

  let answer;
  if (mode === "easy") {
    dict_answer = easyMode[getDailyRandomNumber.randomNumberAnswer(easyMode)];
    answer = dict_answer.value;
  } else if (mode === "imdt") {
    dict_answer = imdtMode[getDailyRandomNumber.randomNumberAnswer(imdtMode)];
    answer = dict_answer.value;
  } else {
    answer = dict_answer.value;
  }

  function showMessage(m) {
    setCenterMsg(m);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }

  const updateColorPredList = (pred, answer, listLen) => {
    let updatedColorList = [];

    for (let i = listLen - 5; i < listLen; i++) {
      if (pred[i]) {
        if (answer[i - listLen + 5] === pred[i].value) {
          updatedColorList.push("green");
          pred[i].color = "green";
        } else if (answer.includes(pred[i].value)) {
          updatedColorList.push("yellow");
          pred[i].color = "yellow";
        } else {
          updatedColorList.push("gray");
          pred[i].color = "gray";
        }
        pred[i].deletable = false;
      } else {
        showMessage(lang.center_msg.lack);
        continue;
        // console.error(`pred[${i}] is undefined`);
      }
    }

    return updatedColorList;
  };

  const handleSubmitButtonClick = () => {
    if (pred.length % 5 !== 0 || pred.length === 0) {
      showMessage(lang.center_msg.lack);
    } else if (pred.length % 5 === 0 && !pred[pred.length - 1].deletable) {
      showMessage(lang.center_msg.lack);
    } else {
      const submitted = pred
        .slice(-5)
        .map((obj) => obj.value)
        .join("");
      if (!jsonData.includes(submitted)) {
        showMessage(lang.center_msg.wrong);
      } else {
        // Case: when it's a noun
        setListLen((listLen) => listLen + 5);

        const updatedColorList = updateColorPredList(pred, answer, listLen);
        setPred([...pred]);
        setColorList(colorList.concat(updatedColorList));

        if (
          5 ===
          updatedColorList.reduce((cnt, e) => {
            return cnt + (e === "green" ? 1 : 0);
          }, 0)
        ) {
          // Case: got an answer
          setGotAnwser(true);
        } else if (pred.length === MAX_PRED_LENGTH) {
          // Case: got a failed
          setFailAnwser(true);
        }
      }
    }
  };

  const keyboardProps = {
    pred,
    setPred,
    gotAnswer,
    listLen,
    showMessage,
    handleSubmitButtonClick,
  };

  return (
    <div className="wordle-page">
      <Header />
      <Box className="wordle-page__answer-board">
        {[...Array(6)].map((_, boxIndex) => (
          <Box key={boxIndex} className="answer-box">
            {[...Array(5)].map((_, itemIndex) => {
              const index = boxIndex * 5 + itemIndex;
              const valueExists = !!pred[index]?.value;
              const animationClass = valueExists ? "animate-pop" : "";
              const colorClass = colorList[index];
              const animationColorClass = colorClass
                ? `${colorClass} animate-color`
                : "";
              return (
                <div
                  key={index}
                  className={`${animationColorClass} ${animationClass}`}
                >
                  {pred[index]?.value}
                </div>
              );
            })}
          </Box>
        ))}
      </Box>

      {/* Keyboard */}
      <Keyboard {...keyboardProps} />

      {/* Center Message */}
      {isVisible ? <CentralMessage message={centerMsg} /> : <div></div>}

      {/* Answer modal */}
      {gotAnswer || failAnwser ? (
        <AnswerPopup
          rounds={pred.length}
          fail={failAnwser}
          answer={dict_answer.key}
        />
      ) : null}
    </div>
  );
}

export default WordleKorPage;
