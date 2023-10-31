import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home.js';
import WordleKor from './components/Pages/WordleKor.js';

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
