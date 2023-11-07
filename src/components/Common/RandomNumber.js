import seedrandom from 'seedrandom';

function hard() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const seed = today.getTime().toString();

  // 씨앗을 기반으로 난수 생성
  const rng = seedrandom(seed);
  
  // 1부터 23742까지의 난수 생성
  const randomNumber = Math.floor(rng() * 26096) + 1;
  
  return randomNumber;
}

function imdt() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const seed = today.getTime().toString();

  // 씨앗을 기반으로 난수 생성
  const rng = seedrandom(seed);
  
  // 1부터 23742까지의 난수 생성
  const randomNumber = Math.floor(rng() * 8522) + 1;
  
  return randomNumber;
}

function easy() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const seed = today.getTime().toString();

  // 씨앗을 기반으로 난수 생성
  const rng = seedrandom(seed);
  
  // 1부터 23742까지의 난수 생성
  const randomNumber = Math.floor(rng() * 992) + 1;
  
  return randomNumber;
}

const getDailyRandomNumber = { hard, imdt, easy}

export default getDailyRandomNumber;