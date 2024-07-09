import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Holis from './Holis';
import Secreto from './Secreto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/holis" element={<Holis />} />
        <Route path="/secreto" element={<Secreto />} />
      </Routes>
    </Router>
  );
}

export default App;
