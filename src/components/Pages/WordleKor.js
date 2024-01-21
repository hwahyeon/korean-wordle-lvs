// React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// MUI
import { Box } from "@mui/material";

// style
import "../../styles/pages/_wordle-kor.scss";

// Components
import Header from "../Common/Header";
import CentralMessage from "../Common/CentralMessage.js";
import AnswerPopup from "../Common/AnswerModal.js";

// Function & Data
import getDailyRandomNumber from "../utils/RandomNumber.js";
import hardMode from "../../assets/hard-mode.json";
import imdtMode from "../../assets/imdt-mode.json";
import easyMode from "../../assets/easy-mode.json";
import allDeposedWords from "../../assets/all-deposed-words.json";
import buttonsData from "../Pages/buttons-kor.json";

function WordleKorPage() {
  const [pred, setPred] = useState([]); // List of input
  const [colorList, setColorList] = useState([]); // List of color
  const [listLen, setListLen] = useState(5);
  const [isVisible, setIsVisible] = useState(false);
  const [centerMsg, setCenterMsg] = useState("");
  const [gotAnswer, setGotAnwser] = useState(false);
  const [failAnwser, setFailAnwser] = useState(false);
  const [key, setKey] = useState("");
  const [keyUpdateCount, setKeyUpdateCount] = useState(0);
  const [firstRender, setFirstRender] = useState(true);
  const [animatedButton, setAnimatedButton] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {}, [failAnwser]);
  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyToHangul = {
        q: "ㅂ",
        w: "ㅈ",
        e: "ㄷ",
        r: "ㄱ",
        t: "ㅅ",
        a: "ㅁ",
        s: "ㄴ",
        d: "ㅇ",
        f: "ㄹ",
        g: "ㅎ",
        z: "ㅋ",
        x: "ㅌ",
        c: "ㅊ",
        v: "ㅍ",
        b: "ㅠ",
        y: "ㅛ",
        u: "ㅕ",
        i: "ㅑ",
        o: "ㅐ",
        p: "ㅔ",
        h: "ㅗ",
        j: "ㅓ",
        k: "ㅏ",
        l: "ㅣ",
        n: "ㅜ",
        m: "ㅡ",
      };
      const key = event.key.toLowerCase();

      if (key === "enter" || key === "backspace") {
        setKey(key);
        // event.preventDefault(); enter key
        setKeyUpdateCount((count) => count + 1);
      } else if (keyToHangul[key]) {
        setKey(keyToHangul[key]);
        setKeyUpdateCount((count) => count + 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (animatedButton !== null) {
      const timer = setTimeout(() => {
        setAnimatedButton(null);
      }, 300); // CSS 애니메이션 지속 시간과 일치

      return () => clearTimeout(timer);
    }
  }, [animatedButton, animationKey]);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else {
      if (key === "enter") {
        handleSubmitButtonClick();
      } else if (key === "backspace") {
        handleRemoveButtonClick();
      } else {
        handleButtonClick(key);
      }
    }
  }, [keyUpdateCount]);

  const myButtons1 = buttonsData.myButtons1;
  const myButtons2 = buttonsData.myButtons2;
  const myButtons3 = buttonsData.myButtons3;

  const msg = {
    lack: "글자 수가 충분하지 않습니다.",
    much: "입력값을 초과했습니다",
    wrong: "정확한 명사가 아닙니다.",
    end: "",
  };

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

  function animationBtn(value) {
    setAnimatedButton(value);
    setAnimationKey((prevKey) => prevKey + 1);
  }

  const handleButtonClick = (value) => {
    animationBtn(value);

    if (pred.length < listLen) {
      const newItem = {
        value: value,
        deletable: true,
        color: "",
      };
      // setPred 내부에서 상태 업데이트 후 추가 로직 수행
      setPred((prevPred) => {
        const newPred = [...prevPred, newItem];
        return newPred;
      });
    } else {
      showMessage(msg.much);
    }
  };

  const handleRemoveButtonClick = () => {
    if (pred[pred.length - 1]?.deletable) {
      let updatedList = [...pred];
      updatedList.pop();
      setPred(updatedList);
    }
  };

  const handleSubmitButtonClick = () => {
    if (pred.length % 5 !== 0 || pred.length === 0) {
      showMessage(msg.lack);
    } else if (pred.length % 5 === 0 && !pred[pred.length - 1].deletable) {
      showMessage(msg.lack);
    } else {
      const submitted = pred
        .slice(-5)
        .map((obj) => obj.value)
        .join("");
      if (!jsonData.includes(submitted)) {
        showMessage(msg.wrong);
      } else {
        // 정확한 명사
        setListLen((listLen) => listLen + 5);

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
            showMessage(msg.lack);
            // console.error(`pred[${i}] is undefined`);
          }
        }
        setPred([...pred]);
        setColorList(colorList.concat(updatedColorList));

        if (
          5 ===
          updatedColorList.reduce((cnt, e) => {
            return cnt + (e === "green" ? 1 : 0);
          }, 0)
        ) {
          // 정답인 경우
          setGotAnwser(true);
        } else if (pred.length === 30) {
          setFailAnwser(true);
        }
      }
    }
  };

  function keyboardColor(v) {
    const foundPreds = pred.filter((predItem) => predItem.value === v);

    if (foundPreds.some((predItem) => predItem.color === "green")) {
      return "green";
    }
    if (foundPreds.some((predItem) => predItem.color === "yellow")) {
      return "yellow";
    }
    if (foundPreds.some((predItem) => predItem.color === "gray")) {
      return "gray";
    }
    return "";
  }

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
      <Box className="keyboard">
        <Box className="raw1">
          {myButtons1.map((button) => (
            <button
              key={button.id}
              onClick={(event) => {
                handleButtonClick(button.value);
                event.currentTarget.blur();
              }}
              value={button.value}
              className={`${keyboardColor(button.value)} ${
                animatedButton === button.value ? "animate-button" : ""
              }`}
              style={{ animationIterationCount: animationKey }}
              disabled={gotAnswer}
            >
              {button.value}
            </button>
          ))}
        </Box>
        <Box className="raw2">
          {myButtons2.map((button) => (
            <button
              key={button.id}
              onClick={(event) => {
                handleButtonClick(button.value);
                event.currentTarget.blur();
              }}
              value={button.value}
              className={`${keyboardColor(button.value)} ${
                animatedButton === button.value ? "animate-button" : ""
              }`}
              style={{ animationIterationCount: animationKey }}
              disabled={gotAnswer}
            >
              {button.value}
            </button>
          ))}
        </Box>
        <Box className="raw3">
          <button
            className={`submit__btn ${
              animatedButton === "enter" ? "animate-button" : ""
            }`}
            onClick={(event) => {
              handleSubmitButtonClick();
              event.currentTarget.blur();
              animationBtn("enter");
            }}
            disabled={gotAnswer}
          >
            제출
          </button>
          {myButtons3.map((button) => (
            <button
              key={button.id}
              onClick={(event) => {
                handleButtonClick(button.value);
                event.currentTarget.blur();
              }}
              value={button.value}
              className={`${keyboardColor(button.value)} ${
                animatedButton === button.value ? "animate-button" : ""
              }`}
              style={{ animationIterationCount: animationKey }}
              disabled={gotAnswer}
            >
              {button.value}
            </button>
          ))}
          <button
            className={`remove_btn ${
              animatedButton === "backspace" ? "animate-button" : ""
            }`}
            onClick={(event) => {
              handleRemoveButtonClick();
              event.currentTarget.blur();
              animationBtn("backspace");
            }}
            disabled={gotAnswer}
          >
            ⌫
          </button>
        </Box>
      </Box>
      {isVisible ? <CentralMessage message={centerMsg} /> : <div></div>}
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
