export const el = {
  home1: "Αυτό το παιχνίδι είναι μια κορεατική εκδοχή του Wordle",
  home2: "Ξεκινάμε;",
  home3: "Επιλέξτε επίπεδο δυσκολίας",
  home4: "Η απάντηση αλλάζει κάθε μέρα στις 00:00 ώρα Κορέας (GMT+9)",
  lv1: "Εύκολο",
  lv2: "Μέτριο",
  lv3: "Δύσκολο",
  submit: "Υποβολή",
  setting: "Ρυθμίσεις",
  settings: {
    dark: "Dark Theme",
    color: "Λειτουργία Υψηλής Αντίθεσης",
    color_desc: "Απολαύστε το παιχνίδι χωρίς εμπόδια στην αντίληψη χρωμάτων.",
    keyboard: "Εισαγωγή μόνο από το Πληκτρολόγιο Οθόνης",
    keyboard_desc:
      "Χρησιμοποιήστε μόνο το πληκτρολόγιο που παρέχεται στην οθόνη. Βοηθά τους χρήστες φωτητικής αναγνώρισης ή χρήστες συσκευών βοηθητικής εισόδου να απολαύσουν πλήρως το παιχνίδι.",
  },
  report: "Report a bug",
  report_desc: "",
  original: "Original Wordle",
  original_desc:
    "The original Wordle game in English, provided by The New York Times.",
  link: "Link",
  button: {
    example: "Try it together",
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
    sub_title2: "Double consonant and complex vowels take up two spaces.",
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
    desc6_1: (
      <>
        If you click the <span>See Word Meaning</span> button after you've
        answered correctly, you'll see the definitions of the word only in
        Korean as shown below.
      </>
    ),
    desc6_2: (
      <>
        Shall we start? <br /> Click the <span>Start Game</span> below.
      </>
    ),
  },
  answer: {
    msg1: (
      <>
        Απίστευτο!
        <br />
        Το βρήκατε με την πρώτη!
        <br />
        Δε μου λέτε και τους αριθμούς για το λαχείο;😏
      </>
    ),
    msg2: (
      <>
        Φανταστικό! Τα καταφέρατε μόλις μετά από δύο προσπάθειες!
        <br />
        Δεν αγοράζετε κι ένα λαχείο;
        <br />
        (Αλλά δε φέρω καμία ευθύνη 😉)
      </>
    ),
    msg3: (
      <>
        Απίστευτο! Το βρήκατε μετά από τρεις προσπάθειες.
        <br />
        Είναι τύχη; Δεξιότητα;
        <br />
        Α, και η τύχη είναι δεξιότητα, έτσι;😎",
      </>
    ),
    msg4: (
      <>
        Τα καταφέρατε στην τέταρτη προσπάθεια.
        <br />Η πραγματική διασκέδαση αρχίζει τώρα, έτσι δεν είναι;🤩
      </>
    ),
    msg5: (
      <>
        Τα καταφέρατε στην πέμπτη προσπάθεια.
        <br />
        Δεν φαίνεστε και πολύ χαλαροί...
        <br />
        Καμία ένταση, λέτε; Αλήθεια;🤨
      </>
    ),
    msg6: (
      <>
        Ουφ!
        <br />
        Δεν χάσατε την τελευταία σας
        <br />
        Επιτυχία!🤗
      </>
    ),
  },
  failed: "Τόσο κοντά! Δοκιμάστε ξανά!😔",
  center_msg: {
    lack: "Ανεπαρκής αριθμός γραμμάτων.",
    much: "Η εισαγωγή υπερβαίνει το όριο.",
    wrong: "Δεν είναι έγκυρο ουσιαστικό.",
    play_block:
      "Παίζετε ήδη ένα παιχνίδι. Παρακαλώ πατήστε το κουμπί κλεισίματος.",
  },
};
