import { ko } from "@lang/ko.js";
import { en } from "@lang/en.js";

const InfoPageSeven = () => {
  const currentLang = localStorage.getItem("language") || "ko";
  const lang = currentLang === "ko" ? ko : en;

  return (
    <div className="example">
      <p className="example__header">{lang.info.header}</p>
      <p className="example__with">{lang.together.title} (6/6)</p>
      <div className="example__group">
        <p className="example__text-explain">{lang.together.desc6_1}</p>
        <div className="example__answer">
          <div className="answerheader">
            <p>검사</p>
            <p className="hanja">檢査</p>
          </div>
          <div className="answermeaning">
            "물질을 시험하거나 시약으로 어떤 물질의 화학적 성질을 측정하는
            방법."
          </div>
        </div>
        <p className="example__text-explain">{lang.together.desc6_2}</p>
      </div>
    </div>
  );
};

export default InfoPageSeven;
