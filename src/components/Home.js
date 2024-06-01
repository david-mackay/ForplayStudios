import React from 'react';
import Slideshow from './Slideshow';
import Section from './Section';
import './Home.css';

const homeImages = [
  '/bluewillow/image1.jpg',
  '/redsorghum/image2.jpg',
  '/yesapothecary/image3.jpg',
];

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Celebrating excellence and innovation in design</h1>
        <p>Explore Projects</p>
      </div>
      <div className="slideshow-container">
        <Slideshow images={homeImages} />
      </div>
    </div>
  );
};

export default Home;
