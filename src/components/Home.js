import React from 'react';
import Slideshow from './Slideshow';
import styles from './Home.module.css'; // Import the CSS module

const homeImages = [
  '/bluewillow/image1.jpg',
  '/redsorghum/image2.jpg',
  '/yesapothecary/image3.jpg',
];

const Home = () => {
  return (
      <div className={styles.slideshowContainer}>
        <Slideshow images={homeImages} />
      </div>
  );
};

export default Home;
