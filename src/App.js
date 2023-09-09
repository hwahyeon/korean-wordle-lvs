import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home.js';
import WordleKor from './components/Pages/WordleKor.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/play" element={<WordleKor />} />
      </Routes>
    </Router>
  );
}

export default App;
