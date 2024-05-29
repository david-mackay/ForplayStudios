import React from 'react';
import Slideshow from './Slideshow';
import Section from './Section';
import './Home.css';

const homeImages = [
  '/background/image1.jpg',
  '/background/image2.jpg',
  '/background/image3.jpg',
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
      <Section id="design">Design Section</Section>
      <Section id="bespoke">Bespoke Section</Section>
      <Section id="about">About Section</Section>
      <Section id="contact">Contact Section</Section>
    </div>
  );
};

export default Home;
