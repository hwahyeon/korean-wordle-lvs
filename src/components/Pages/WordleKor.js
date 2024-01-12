// React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// MUI
import { Container, Box } from "@mui/material";

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
  const [submitBlock, setSubmitBlock] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [centerMsg, setCenterMsg] = useState("");
  const [gotAnswer, setGotAnwser] = useState(false);
  const [failAnwser, setFailAnwser] = useState(false);

  useEffect(() => {}, [failAnwser]);

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

  // const answer = ['ㅇ', 'ㅏ', 'ㄴ', 'ㄴ', 'ㅏ']
  // console.log(answer)

  function showMessage(m) {
    setCenterMsg(m);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }

  const handleButtonClick = (value) => {
    if (pred.length < listLen) {
      const newItem = {
        value: value,
        deletable: true,
        color: "",
      };
      // setPred 내부에서 상태 업데이트 후 추가 로직 수행
      setPred((prevPred) => {
        const newPred = [...prevPred, newItem];

        if (pred.length % 5 !== 0) {
          setSubmitBlock(true);
        }
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
        // setSubmitBlock(false)

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
    return ""; // 어떤 색상도 찾지 못했을 시
  }

  return (
    <Container className="WorldKorPage">
      <Header />
      <Box className="AnswerBoxes">
        {[...Array(6)].map((_, boxIndex) => (
          <Box key={boxIndex} className="AnswerBox">
            {[...Array(5)].map((_, itemIndex) => {
              const index = boxIndex * 5 + itemIndex;
              const valueExists = !!pred[index]?.value;
              const animationClass = valueExists ? 'animate-pop' : '';
              const colorClass = colorList[index];
              const animationColorClass = colorClass ? `${colorClass} animate-color` : '';
              return (
                <div key={index} className={`${animationColorClass} ${animationClass}`}>
                  {pred[index]?.value}
                </div>
              );
            })}
          </Box>
        ))}
      </Box>
      <Box className="keyBoard">
        <Box className="raw">
          {myButtons1.map((button) => (
            <button
              key={button.id}
              onClick={() => handleButtonClick(button.value)}
              value={button.value}
              className={keyboardColor(button.value)}
              disabled={gotAnswer}
            >
              {button.value}
            </button>
          ))}
        </Box>
        <Box className="raw">
          {myButtons2.map((button) => (
            <button
              key={button.id}
              onClick={() => handleButtonClick(button.value)}
              value={button.value}
              className={keyboardColor(button.value)}
              disabled={gotAnswer}
            >
              {button.value}
            </button>
          ))}
        </Box>
        <Box className="raw">
          <button
            className="submit_btn"
            onClick={() => handleSubmitButtonClick()}
            disabled={gotAnswer}
          >
            제출
          </button>
          {myButtons3.map((button) => (
            <button
              key={button.id}
              onClick={() => handleButtonClick(button.value)}
              value={button.value}
              className={keyboardColor(button.value)}
              disabled={gotAnswer}
            >
              {button.value}
            </button>
          ))}
          <button
            className="remove_btn"
            onClick={() => handleRemoveButtonClick()}
            disabled={gotAnswer}
          >
            ⌫
          </button>
        </Box>
      </Box>
      {isVisible ? <CentralMessage message={centerMsg} /> : <div></div>}
      {gotAnswer ? (
        <AnswerPopup
          rounds={pred.length}
          fail={failAnwser}
          answer={dict_answer.key}
        />
      ) : null}
      {failAnwser ? (
        <AnswerPopup
          rounds={pred.length}
          fail={failAnwser}
          answer={dict_answer.key}
        />
      ) : null}
    </Container>
  );
}

export default WordleKorPage;
