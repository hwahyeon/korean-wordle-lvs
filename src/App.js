import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WordleKor from './components/Pages/WordleKor.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WordleKor />} />
      </Routes>
    </Router>
  );
}

export default App;
