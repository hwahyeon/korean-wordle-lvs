import { useLanguage } from "@contexts/LanguageContext";

const InfoPageThree = () => {
  const { lang } = useLanguage();

  return (
    <div className="example">
      <p className="example__header">{lang.info.header}</p>
      <p className="example__with">{lang.together.title} (2/6)</p>
      <div className="example__group">
        <div className="example__div">
          <div className="gray btn--active">ㅎ</div>
          <div className="yellow btn--active">ㅏ</div>
          <div className="gray btn--active">ㄴ</div>
          <div className="gray btn--active">ㅡ</div>
          <div className="gray btn--active">ㄹ</div>
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
        <p className="example__text-explain">{lang.together.desc2}</p>
      </div>
    </div>
  );
};

export default InfoPageThree;
