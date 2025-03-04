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
import { Helmet } from "react-helmet";

function WordleKorPage() {
  const { lang } = useLanguage();
  const [pred, setPred] = useState([]); // List of input
  const [colorList, setColorList] = useState([]); // List of color
  const [listLen, setListLen] = useState(5);
  const [isVisible, setIsVisible] = useState(false);
  const [centerMsg, setCenterMsg] = useState("");
  const [gotAnswer, setGotAnswer] = useState(false);
  const [failAnswer, setFailAnswer] = useState(false);

  const MAX_PRED_LENGTH = 30;

  useEffect(() => {}, [failAnswer]);

  // Adjust selected mode
  const { mode } = useParams();
  const jsonData = allDeposedWords;
  const formattedMode = mode.charAt(0).toUpperCase() + mode.slice(1);

  const modeMap = {
    easy: easyMode,
    imdt: imdtMode,
    hard: hardMode,
  };

  const selectedMode = modeMap[mode] || hardMode;
  const dict_answer = selectedMode[getDailyRandomNumber.randomNumberAnswer(selectedMode)];
  const answer = dict_answer.value;

  function showMessage(m) {
    setCenterMsg(m);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }

  const updateColorPredList = (pred, answer, listLen) => {
    const updatedColorList = [];
    const answerArray = answer.split("");
    const answerLetterCount = {};
    const answerUsed = new Array(answer.length).fill(false);
  
    for (const char of answerArray) {
      answerLetterCount[char] = (answerLetterCount[char] || 0) + 1;
    }
  
    for (let i = listLen - 5; i < listLen; i++) {
      const item = pred[i];
      if (!item) {
        showMessage(lang.center_msg.lack);
        continue;
      }
  
      if (answer[i - listLen + 5] === item.value) {
        item.color = "green";
        answerUsed[i - listLen + 5] = true;
        answerLetterCount[item.value]--;
        updatedColorList.push("green");
      } else {
        updatedColorList.push(null);
      }
  
      item.deletable = false;
    }
  
    for (let i = listLen - 5; i < listLen; i++) {
      const item = pred[i];
      if (updatedColorList[i - listLen + 5] === "green") continue;
  
      const charIndex = answerArray.findIndex(
        (char, idx) => char === item.value && !answerUsed[idx]
      );
  
      if (charIndex !== -1 && answerLetterCount[item.value] > 0) {
        item.color = "yellow";
        answerUsed[charIndex] = true;
        answerLetterCount[item.value]--;
        updatedColorList[i - listLen + 5] = "yellow";
      } else {
        item.color = "gray";
        updatedColorList[i - listLen + 5] = "gray";
      }
  
      item.deletable = false;
    }
  
    return updatedColorList;
  };
  
  const handleSubmitButtonClick = () => {
    if (
      pred.length % 5 !== 0 ||
      pred.length === 0 ||
      !pred[pred.length - 1].deletable
    ) {
      return showMessage(lang.center_msg.lack);
    }

    const submitted = pred
      .slice(-5)
      .map((obj) => obj.value)
      .join("");
    if (!jsonData.includes(submitted)) {
      return showMessage(lang.center_msg.wrong);
    }

    setListLen((prev) => prev + 5);

    const updatedColorList = updateColorPredList(pred, answer, listLen);
    setPred([...pred]);
    setColorList(colorList.concat(updatedColorList));

    const correctCount = updatedColorList.filter((color) => color === "green").length;

    if (correctCount === 5) {
      setGotAnswer(true);
    } else if (pred.length === MAX_PRED_LENGTH) {
      setFailAnswer(true);
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
      <Helmet>
        <title>한글 Wordle | {formattedMode} mode</title>
      </Helmet>
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
      {isVisible && <CentralMessage message={centerMsg} />}

      {/* Answer modal */}
      {(gotAnswer || failAnswer) && (
        <AnswerPopup
          rounds={pred.length}
          fail={failAnswer}
          answer={dict_answer.key}
        />
      )}
    </div>
  );
}

export default WordleKorPage;
