import { atom } from 'recoil';

export const sidebarState = atom({
  key: 'sidebarState',
  default: false, // 초기 값 (사이드바 닫힘)
});