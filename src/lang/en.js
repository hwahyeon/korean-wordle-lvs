export const en = {
  home1: "This game is a Korean version of Wordle",
  home2: "Shall we start?",
  home3: "Choose the difficulty level",
  home4: "The answer changes every day at 12 PM sharp",
  lv1: "Beginner",
  lv2: "Intermediate",
  lv3: "Advanced",
  submit: "Submit",
  setting: "Settings",
  settings: {
    dark: "Dark Theme",
    color: "High Contrast Mode",
    color_desc: "Contrast and colorblindness improvements",
    lang: "언어",
    lang_desc:
      "한국어 학습이 목표인 분들을 위해 영어를 제공합니다. 하지만 정답을 맞힌 후, 볼 수 있는 단어의 뜻은 한국어로만 제공됩니다.",
    keyboard: "Onscreen Keyboard Input Only",
    keyboard_desc:
      "화면에 제공된 키보드만 사용할 수 있도록 합니다. 음성 인식이나 입력 보조 장치의 사용자가 온전히 게임을 즐길 수 있도록 도와줍니다 Ignore key input except from the onscreen keyboard. Most helpful for users using speech recognition or other assistive devices.",
  },
  report: "Report a bug",
  report_desc: "",
  original: "Original Wordle",
  original_desc:
    "The original Wordle game in English, provided by The New York Times.",
  link: "Link",
  button: {
    example: "Try Together",
    prev: "Prev",
    next: "Next",
    start: "Start Game",
    meaning: "See Word Meaning",
    home: "Home",
    back: "Go Back",
  },
  info: {
    header: "How to Play",
    title: "Guess the hidden letters (noun) in 6 tries",
    sub_title1: "Colors will give you clues about the answer.",
    sub_title2: "Double consonants take up two spaces.",
    sub_desc1: "ㅎ is in the word and in the correct position.",
    sub_desc2: "ㅓ is in the word but in the wrong position.",
    sub_desc3: "ㄹ is not in the word.",
    sub_desc4: "ㄲ is represented as ㄱㄱ.",
    sub_desc5: "ㅘ is represented as ㅗㅏ.",
  },
  together: {
    title: "Shall We Try Together?",
    desc1: (
      <>
        This is the start screen. Since there are no clues yet, why not try any
        word? Let's try <span>하늘</span>.
      </>
    ),
    desc2: (
      <>
        As the tile colors change, we get several clues.
        <br /> Today's word does not include <span>ㅎ</span>,<span>ㄴ</span>,
        <span>ㅡ</span>,<span>ㄹ</span>, but it does include <span>ㅏ</span>.{" "}
        <br /> What word could that be? <br /> How about <span>복사</span>?
      </>
    ),
    desc3: (
      <>
        Oh, it's not the correct answer, but we've got a definite clue. Today's
        word ends with <span>사</span>. <br />
        Hmm, shall we try <span>경사</span>?
      </>
    ),
    desc4: (
      <>
        We're close to the answer. Now we only need to match two tiles. Could
        the answer possibly be <span>검사</span>?
      </>
    ),
    desc5: <>"Correct!"</>,
  },
  answer: {
    msg1: (
      <>
        Amazing luck!
        <br />
        You got it right on the first try!
        <br />
        Hey, could you share <br />
        the lottery numbers with me?😏
      </>
    ),
    msg2: (
      <>
        Fantastic! You succeeded in just two tries!
        <br />
        Maybe consider buying a lottery ticket?
        <br />
        (Though I won't be held responsible 😉)
      </>
    ),
    msg3: (
      <>
        Incredible! Got it in three tries.
        <br />
        Is it luck? Or skill?
        <br />
        Oh, luck is a skill too, you say?😎
      </>
    ),
    msg4: (
      <>
        You succeeded on the fourth try.
        <br />
        The real fun starts from now on, right?!🤩
      </>
    ),
    msg5: (
      <>
        You succeeded on the fifth try.
        <br />
        You don’t seem too relaxed...
        <br />
        Didn’t feel tense, you say? Really?🤨
      </>
    ),
    msg6: (
      <>
        Phew
        <br />
        You didn’t miss your last chance!
        <br />
        Success!🤗
      </>
    ),
  },
  falied: "So close! Give it another shot!😔",
  center_msg: {
    lack: "Not enough letters.",
    much: "Input exceeds limit.",
    wrong: "Not a valid noun.",
    play_block:
      "You are already playing a game. Please press the close button.",
  },
};
