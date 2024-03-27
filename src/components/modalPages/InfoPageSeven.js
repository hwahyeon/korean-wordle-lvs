import { ko } from "@lang/ko.js";
import { en } from "@lang/en.js";

const InfoPageSeven = () => {
  const currentLang = localStorage.getItem("language") || "ko";
  const lang = currentLang === "ko" ? ko : en;

  return (
    <div className="example">
      <p className="example__header">{lang.info.header}</p>
      <p className="example__with">{lang.together.title} (6/6)</p>

      <p className="example__text-explain">
        정답을 맞춘 후엔,
        <div className="HomeButton">{lang.button.meaning}</div> 버튼을 누르면,
        단어의 뜻을 확인할 수 있습니다.

        자, 그럼 게임을 시작해볼까요? 아래의 게임 시작 버튼을 눌러주세요.
      </p>
    </div>
  );
};

export default InfoPageSeven;
