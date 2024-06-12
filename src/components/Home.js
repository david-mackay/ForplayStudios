import React from 'react';
import Slideshow from './Slideshow';
import styles from './Home.module.css'; // Import the CSS module

const homeImages = [
  '/bluewillow/landscapebluewillowsignindoors.jpg',
  '/bluewillow/eatingareaangle.jpg',  
  '/redsorghum/image3.jpg',
  '/yesapothecary/landscapedecor.jpg',
  '/yesapothecary/landscapeseatingareafromback.jpg',
  // '/yesapothecary/verticalbooth.jpg'
];

const Home = () => {
  return (
      <div className={styles.slideshowContainer}>
        <Slideshow images={homeImages} />
      </div>
  );
};

export default Home;
