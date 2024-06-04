import React from 'react';
import Section from './Section';
import styles from './About.module.css'; // Import the CSS module
import Slideshow from './Slideshow';

const aboutImages = [
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
];

const statItems = [
  {
    title: '2 Members',
    description: 'Xin Wang and Mandy Zhang lead ForPlay Studio, bringing together their unique talents and creative visions to design unforgettable spaces.'
  },
  {
    title: '3 Projects',
    description: 'With a portfolio that includes Blue Willow, Ye\'s Apothecary, and Red Sorghum, ForPlay Studio continues to set new standards in restaurant and speakeasy design.'
  },
  {
    title: '1 Location',
    description: 'Located in Long Island City, ForPlay Studio serves as the creative hub where all their innovative designs come to life.'
  },
  {
    title: '5 Years',
    description: 'For the past five years, ForPlay Studio has been dedicated to elevating the hospitality design industry through their carefully crafted experiences and storytelling.'
  }
];

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <Section id="about">
        <div className={styles.aboutContent}>
          <div className={styles.aboutSection}>
            <h2>Our Story</h2>
            <p>
              ForPlay Studio, based in Long Island City, was founded by Xin Wang and Mandy Zhang. The two members have collaborated on numerous projects, combining their expertise to create stunning and immersive environments. They have built notable establishments such as Blue Willow, Ye's Apothecary, and Red Sorghum.
            </p>
            <p>
              Blue Willow and Red Sorghum are Sichuan restaurants that offer a rich blend of traditional flavors with a modern twist. Ye's Apothecary is a Shanghai nostalgia speakeasy, providing an immersive experience that transports guests to a bygone era.
            </p>
          </div>
          <div className={styles.statsSection}>
            {statItems.map((item, index) => (
              <div key={index} className={styles.statItem}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.quoteSection}>
            <blockquote>
              ‘ForPlay Studio, renowned for their ability to blend traditional aesthetics with modern innovation, is a leader in creating immersive dining experiences.’
            </blockquote>
            <cite>DESIGN MAGAZINE</cite>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
