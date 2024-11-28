import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserLogin, Home, NoData, Profile, SlotPge } from './pages';
import './';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/slots" element={<SlotPge />} />
        <Route path="*" element={<NoData />} />
      </Routes>
    </Router>
  );
}

export default App;
