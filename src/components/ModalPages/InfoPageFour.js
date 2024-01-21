const InfoPageFour = () => {
  return (
    <div className="example">
    <p className="example__header">게임하는 방법</p>
    <p className="example__explain">
      6번 시도해서 숨겨진 글자(명사)를 맞춰보세요
    </p>
    <p className="example__sub-header">색상은 정답의 단서가 됩니다.</p>
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
      <p className="example__text-explain">
      정답에 가까워지고 있습니다. 오늘의 단어는 사로 끝나는 단어였군요. 음, 경사로 한 번 시도해보죠.
      </p>

    </div>
  </div>
  );
};

export default InfoPageFour;
