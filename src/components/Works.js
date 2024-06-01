import React from 'react';
import Slideshow from './Slideshow';
import Section from './Section';
import './Works.css';

const blueWillowImages = [
  '/bluewillow/image1.jpg',
  '/bluewillow/image2.jpg',
  '/bluewillow/image3.jpg',
];

const yesApothecaryImages = [
  '/yesapothecary/image1.jpg',
  '/yesapothecary/image2.jpg',
  '/yesapothecary/image3.jpg',
];

const redSorghumImages = [
  '/redsorghum/image1.jpg',
  '/redsorghum/image2.jpg',
  '/redsorghum/image3.jpg',
];

const worksData = [
  { 
    title: 'Blue Willow', 
    images: blueWillowImages, 
    description: 'Blue Willow is a modern take on traditional dining, offering a unique fusion of flavors in a stylish setting.'
  },
  { 
    title: "Ye's Apothecary", 
    images: yesApothecaryImages, 
    description: 'Ye\'s Apothecary brings together ancient remedies and contemporary cuisine in an immersive environment.'
  },
  { 
    title: 'Red Sorghum', 
    images: redSorghumImages, 
    description: 'Red Sorghum offers a rustic dining experience with a focus on locally sourced ingredients and hearty meals.'
  },
];

const Works = () => {
  return (
    <div className="works">
      <div className="header-section">
        <h1>Featured Work</h1>
      </div>
      <div className="intro-section">
        <div className="intro-text">
          <h2>Celebrating excellence and innovation in hospitality design</h2>
          <p>Explore Projects</p>
        </div>
        <div className="intro-quote">
          <blockquote>
            ‘No other firm marries concept and aesthetics with as much depth and personality; they have an uncanny ability to make spaces feel old, new and timeless all at once.’
          </blockquote>
          <cite>SURFACE</cite>
        </div>
      </div>
      <div className="works-sections">
        {worksData.map((work, index) => (
          <Section key={index} id={`work-${index}`}>
            <div className={`works-section ${index % 2 === 0 ? 'left' : 'right'}`}>
              {index % 2 === 0 ? (
                <>
                  <div className="slideshow-wrapper">
                    <Slideshow images={work.images} />
                  </div>
                  <div className="work-text">
                    <h2>{work.title}</h2>
                    <p>{work.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="work-text">
                    <h2>{work.title}</h2>
                    <p>{work.description}</p>
                  </div>
                  <div className="slideshow-wrapper">
                    <Slideshow images={work.images} />
                  </div>
                </>
              )}
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
};

export default Works;
