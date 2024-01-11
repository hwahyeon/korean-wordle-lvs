import { atom } from 'recoil';

export const darkModeState = atom({
  key: 'darkModeState',
  default: false, // 기본값은 false (라이트 모드)
});