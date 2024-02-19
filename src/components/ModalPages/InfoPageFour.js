import { ko } from "../../lang/ko.js";
import { en } from "../../lang/en.js";

const InfoPageFour = () => {
  const currentLang = localStorage.getItem("language") || "ko";
  const lang = currentLang === "ko" ? ko : en;

  return (
    <div className="example">
      <p className="example__header">{lang.info.header}</p>
      <p className="example__with">{lang.together.title} (3/5)</p>
      <div className="example__group">
        <div className="example__div">
          <div className="gray">ㅎ</div>
          <div className="yellow">ㅏ</div>
          <div className="gray">ㄴ</div>
          <div className="gray">ㅡ</div>
          <div className="gray">ㄹ</div>
        </div>
        <div className="example__div">
          <div className="gray btn--active">ㅂ</div>
          <div className="gray btn--active">ㅗ</div>
          <div className="yellow btn--active">ㄱ</div>
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
        <div className="example__div">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="example__text-explain">{lang.together.desc3}</p>
      </div>
    </div>
  );
};

export default InfoPageFour;
