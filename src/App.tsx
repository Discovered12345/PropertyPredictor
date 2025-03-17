import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import PricePredictor from './pages/PricePredictor';
import Creators from './pages/Creators';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900/50 relative text-white">
        <AnimatedBackground />
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predictor" element={<PricePredictor />} />
          <Route path="/creators" element={<Creators />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;