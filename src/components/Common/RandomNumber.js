import seedrandom from 'seedrandom';

function randomNumberAnswer(data) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const seed = today.getTime().toString();

  const rng = seedrandom(seed);
  const randomNumber = Math.floor(rng() * data.length) + 1;
  
  return randomNumber;
}

const getDailyRandomNumber = { randomNumberAnswer}

export default getDailyRandomNumber;