import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import GalleryRedSorghum from './components/GalleryRedSorghum';
import GalleryYesApothecary from './components/GalleryYesApothecary';
import GalleryBlueWillow from './components/GalleryBlueWillow';  
import GlobalStyle from './components/GlobalStyle';
import TransitionWrapper from './components/TransitionWrapper';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <TransitionWrapper>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/gallery/red-sorghum" element={<GalleryRedSorghum />} />
                  <Route path="/gallery/yes-apothecary" element={<GalleryYesApothecary />} />
                  <Route path="/gallery/blue-willow" element={<GalleryBlueWillow />} />
                </Routes>
              </TransitionWrapper>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
