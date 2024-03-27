import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@components/pages/Home.js';
import WordleKor from '@components/pages/WordleKor.js';
import '@styles/_reset.scss';
import '@styles/global.scss';

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/play/:mode" element={<WordleKor />} />
      </Routes>
    </Router>
  );
}

export default App;
