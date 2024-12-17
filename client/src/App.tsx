import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Navbar from './navigation/components/Navbar';
import Footer from './components/Footer';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
