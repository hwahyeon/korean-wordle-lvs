import { ko } from "../../lang/ko.js";
import { en } from "../../lang/en.js";

const InfoPageFive = () => {
  const currentLang = localStorage.getItem("language") || "ko";
  const lang = currentLang === "ko" ? ko : en;

  return (
    <div className="example">
      <p className="example__header">{lang.info.header}</p>
      <p className="example__with">{lang.together.title} (4/5)</p>
      <div className="example__group">
        <div className="example__div">
          <div className="gray">ㅎ</div>
          <div className="yellow">ㅏ</div>
          <div className="gray">ㄴ</div>
          <div className="gray">ㅡ</div>
          <div className="gray">ㄹ</div>
        </div>
        <div className="example__div">
          <div className="gray">ㅂ</div>
          <div className="gray">ㅗ</div>
          <div className="yellow">ㄱ</div>
          <div className="green">ㅅ</div>
          <div className="green">ㅏ</div>
        </div>
        <div className="example__div">
          <div className="green btn--active">ㄱ</div>
          <div className="gray btn--active">ㅕ</div>
          <div className="gray btn--active">ㅇ</div>
          <div className="green btn--active">ㅅ</div>
          <div className="green btn--active">ㅏ</div>
        </div>
        <div className="example__div">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="example__div">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="example__div">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="example__text-explain">{lang.together.desc4}</p>
      </div>
    </div>
  );
};

export default InfoPageFive;
