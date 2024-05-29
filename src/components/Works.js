import React from 'react';
import Slideshow from './Slideshow';
import './Works.css';

const blueWillowImages = [
    '/background/image1.jpg',
    '/background/image2.jpg',
    '/background/image3.jpg',
];

const yesApothecaryImages = [
    '/background/image1.jpg',
    '/background/image2.jpg',
    '/background/image3.jpg',
];

const redSorghumImages = [
    '/background/image1.jpg',
    '/background/image2.jpg',
    '/background/image3.jpg',
];

const Works = () => {
  return (
    <div className="works">
      <div className="header-section">
        <h1>Featured Work</h1>
      </div>
      <div className="works-options">
        <div className="works-option">
          <Slideshow images={blueWillowImages} />
          <h2>Blue Willow</h2>
        </div>
        <div className="works-option">
          <Slideshow images={yesApothecaryImages} />
          <h2>Ye's Apothecary</h2>
        </div>
        <div className="works-option">
          <Slideshow images={redSorghumImages} />
          <h2>Red Sorghum</h2>
        </div>
      </div>
    </div>
  );
};

export default Works;
