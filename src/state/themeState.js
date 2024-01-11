import { atom } from 'recoil';

export const darkModeState = atom({
  key: 'darkModeState',
  default: false, // 기본값은 false (라이트 모드)
});

export const colorModeState = atom({
  key: 'colorModeState',
  default: false, // 기본값은 false (색맹 모드 비활성화)
});