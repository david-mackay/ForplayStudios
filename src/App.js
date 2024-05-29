import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Works from './components/Works'; // Updated import for the new Works component
import About from './components/About';
import Contact from './components/Contact';
import LogoOverlay from './components/LogoOverlay'; // Import the LogoOverlay component
import './App.css';
import './GlobalStyles.css'; // Import the global styles

const App = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 5000); // Show overlay for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className={`App ${showOverlay ? '' : 'fade-in'}`}>
        {showOverlay && <LogoOverlay />}
        {!showOverlay && (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} /> {/* Updated route for the Works component */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
