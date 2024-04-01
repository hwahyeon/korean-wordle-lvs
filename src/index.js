import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { LanguageProvider } from '@contexts/LanguageContext';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </RecoilRoot>
  </React.StrictMode>
);
