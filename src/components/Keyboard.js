import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import buttonsData from "@assets/buttons-kor.json";
import { useLanguage } from "@contexts/LanguageContext";
import { useRecoilValue } from "recoil";
import { keyboardModeState } from "@state/themeState";

const Keyboard = ({
  pred,
  setPred,
  gotAnswer,
  listLen,
  showMessage,
  handleSubmitButtonClick,
}) => {
  const { lang } = useLanguage();
  const [key, setKey] = useState("");
  const [keyUpdateCount, setKeyUpdateCount] = useState(0);
  const [animatedButton, setAnimatedButton] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [firstRender, setFirstRender] = useState(true);

  const myButtons1 = buttonsData.myButtons1;
  const myButtons2 = buttonsData.myButtons2;
  const myButtons3 = buttonsData.myButtons3;

  // Real Keyboard input
  const keyboardMode = useRecoilValue(keyboardModeState);

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Keyboard Mode
      if (!!keyboardMode) {
        return;
      }

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
  }, [keyboardMode]);

  useEffect(() => {
    if (animatedButton !== null) {
      const timer = setTimeout(() => {
        setAnimatedButton(null);
      }, 300); // CSS 애니메이션 지속 시간과 일치

      return () => clearTimeout(timer);
    }
  }, [animatedButton, animationKey]);

  function animationBtn(value) {
    setAnimatedButton(value);
    setAnimationKey((prevKey) => prevKey + 1);
  }

  // function keyboardColor(v) {
  //   const foundPreds = pred.filter((predItem) => predItem.value === v);

  //   if (foundPreds.some((predItem) => predItem.color === "green")) {
  //     return "green";
  //   }
  //   if (foundPreds.some((predItem) => predItem.color === "yellow")) {
  //     return "yellow";
  //   }
  //   if (foundPreds.some((predItem) => predItem.color === "gray")) {
  //     return "gray";
  //   }
  //   return "";
  // }

  function keyboardColor(value) {
    const colors = ["green", "yellow", "gray"];

    for (const color of colors) {
      if (
        pred.some(
          (predItem) => predItem.value === value && predItem.color === color
        )
      ) {
        return color;
      }
    }
    return "";
  }

  const handleRemoveButtonClick = () => {
    if (pred[pred.length - 1]?.deletable) {
      let updatedList = [...pred];
      updatedList.pop();
      setPred(updatedList);
    }
  };

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
      showMessage(lang.center_msg.much);
    }
  };

  return (
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
          {lang.submit}
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
  );
};

export default Keyboard;
