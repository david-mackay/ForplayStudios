import React from 'react';
import Section from './Section';
import './About.css';
import Slideshow from './Slideshow';

const aboutImages =[
    "/bluewillow/image1.jpg",
    "/yesapothecary/image1.jpg",
    "/redsorghum/image1.jpg",
    "/bluewillow/image2.jpg",
    "/yesapothecary/image2.jpg",
    "/redsorghum/image2.jpg",
    "/bluewillow/image3.jpg",
    "/yesapothecary/image3.jpg",
    "/redsorghum/image3.jpg",
    "/bluewillow/image4.jpg",
]

const About = () => {
  return (
    <div className="about-container">
    <Section id="about">
      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            ForPlay Studio, based in Long Island City, was founded by Xin Wang and Mandy Zhang. The two members have collaborated on numerous projects, combining their expertise to create stunning and immersive environments. They have built notable establishments such as Blue Willow, Ye's Apothecary, and Red Sorghum.
          </p>
          <p>
            Blue Willow and Red Sorghum are Sichuan restaurants that offer a rich blend of traditional flavors with a modern twist. Ye's Apothecary is a Shanghai nostalgia speakeasy, providing an immersive experience that transports guests to a bygone era.
          </p>
        </div>
        <div className="stats-section">
          <div className="stat-item">
            <h3>2 Members</h3>
            <p>
              Xin Wang and Mandy Zhang lead ForPlay Studio, bringing together their unique talents and creative visions to design unforgettable spaces.
            </p>
          </div>
          <div className="stat-item">
            <h3>3 Projects</h3>
            <p>
              With a portfolio that includes Blue Willow, Ye's Apothecary, and Red Sorghum, ForPlay Studio continues to set new standards in restaurant and speakeasy design.
            </p>
          </div>
          <div className="stat-item">
            <h3>1 Location</h3>
            <p>
              Located in Long Island City, ForPlay Studio serves as the creative hub where all their innovative designs come to life.
            </p>
          </div>
          <div className="stat-item">
            <h3>5 Years</h3>
            <p>
              For the past five years, ForPlay Studio has been dedicated to elevating the hospitality design industry through their carefully crafted experiences and storytelling.
            </p>
          </div>
        </div>
        <div className="quote-section">
          <blockquote>
            ‘ForPlay Studio, renowned for their ability to blend traditional aesthetics with modern innovation, is a leader in creating immersive dining experiences.’
          </blockquote>
          <cite>DESIGN MAGAZINE</cite>
        </div>
      </div>
    </Section>
    <div className="slideshow-container">
        <Slideshow images={aboutImages} />
      </div>
    </div>
  );
};

export default About;
