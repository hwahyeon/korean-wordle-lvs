const InfoPageThree = () => {
  return (
    <div className="example">
    <p className="example__header">게임하는 방법</p>
    <p className="example__explain">
      6번 시도해서 숨겨진 글자(명사)를 맞춰보세요
    </p>
    <p className="example__sub-header">색상은 정답의 단서가 됩니다.</p>
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
      <p className="example__text-explain">
      타일의 색이 변경되면서 여러 단서가 나왔어요. 오늘의 단어는 ㅎ,ㄴ,ㅡ,ㄹ 를 포함하지 않고, ㅏ를 포함하고 있군요. 그럼 복사를 써보겠습니다. ㅎ,ㄴ,ㅡ,ㄹ를 포함하지 않고, ㅏ를 포함한 단어 중 하나니까요.
      </p>

    </div>
  </div>
  );
};

export default InfoPageThree;
