import { ko } from "../../lang/ko.js";
import { en } from "../../lang/en.js";

const InfoPageTwo = () => {
  const currentLang = localStorage.getItem("language") || "ko";
  const lang = currentLang === "ko" ? ko : en;

  return (
    <div className="example">
      <p className="example__header">{lang.info.header}</p>
      <p className="example__with">{lang.together.title} (1/5)</p>
      <div className="example__group">
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
        <p className="example__text-explain">{lang.together.desc1}</p>
      </div>
    </div>
  );
};

export default InfoPageTwo;
