import { atom } from "recoil";

export const sidebarState = atom({
  key: "sidebarState",
  default: false, // 초기 값 (사이드바 닫힘)
});

export const currentLanguage = atom({
  key: "languageState",
  default: false, // 초기 값 (한국어)
});
