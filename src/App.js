import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/Home.js";
import WordleKor from "@pages/WordleKor.js";
import NotFound from "@pages/NotFound.js";
import "@styles/_reset.scss";
import "@styles/global.scss";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/:mode" element={<WordleKor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
