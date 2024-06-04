import React from 'react';
import GridGallery from './GridGallery';
import Slideshow from './Slideshow';
import styles from './Works.module.css'; // Import the CSS module

const blueWillowImages1 = [
  '/bluewillow/image1.jpg',
  '/bluewillow/image2.jpg',
  '/bluewillow/image3.jpg',
];

const blueWillowImages2 = [
  '/bluewillow/image4.jpg',
  '/bluewillow/image5.jpg',
  '/bluewillow/image6.jpg',
];

const blueWillowImages3 = [
  '/bluewillow/image7.jpg',
  '/bluewillow/image8.jpg',
  '/bluewillow/image9.jpg',
];

const blueWillowImages4 = [
  '/bluewillow/image10.jpg',
  '/bluewillow/image11.jpg',
  '/bluewillow/image12.jpg',
];

const yesApothecaryImages1 = [
  '/yesapothecary/image1.jpg',
  '/yesapothecary/image2.jpg',
  '/yesapothecary/image3.jpg',
];

const yesApothecaryImages2 = [
  '/yesapothecary/image4.jpg',
  '/yesapothecary/image5.jpg',
  '/yesapothecary/image6.jpg',
];

const yesApothecaryImages3 = [
  '/yesapothecary/image7.jpg',
  '/yesapothecary/image8.jpg',
  '/yesapothecary/image9.jpg',
];

const yesApothecaryImages4 = [
  '/yesapothecary/image10.jpg',
  '/yesapothecary/image11.jpg',
  '/yesapothecary/image12.jpg',
];

const redSorghumImages1 = [
  '/redsorghum/image1.jpg',
  '/redsorghum/image2.jpg',
  '/redsorghum/image3.jpg',
];

const redSorghumImages2 = [
  '/redsorghum/image2.jpg',
  '/redsorghum/image1.jpg',
  '/redsorghum/image3.jpg',
];

const redSorghumImages3 = [
  '/redsorghum/image3.jpg',
  '/redsorghum/image1.jpg',
  '/redsorghum/image2.jpg',
];

const redSorghumImages4 = [
  '/redsorghum/image2.jpg',
  '/redsorghum/image3.jpg',
  '/redsorghum/image1.jpg',
];

const projects = [
  {
    title: 'Blue Willow',
    slideshows: [blueWillowImages1, blueWillowImages2, blueWillowImages3, blueWillowImages4],
    description: 'Blue Willow is a Sichuan restaurant that offers a rich blend of traditional flavors with a modern twist.'
  },
  {
    title: 'Ye\'s Apothecary',
    slideshows: [yesApothecaryImages1, yesApothecaryImages2, yesApothecaryImages3, yesApothecaryImages4],
    description: 'Ye\'s Apothecary is a Shanghai nostalgia speakeasy, providing an immersive experience that transports guests to a bygone era.'
  },
  {
    title: 'Red Sorghum',
    slideshows: [redSorghumImages1, redSorghumImages2, redSorghumImages3, redSorghumImages4],
    description: 'Red Sorghum is a Sichuan restaurant that offers a rich blend of traditional flavors with a modern twist.'
  }
];

const Works = () => {
  const createSlideshowComponents = (slideshows) => {
    return slideshows.map((images, index) => (
      <Slideshow key={index} images={images} />
    ));
  };

  return (
    <div className={styles.slideshowBg}>
      <div className={styles.fullscreenSlideshow}>
        <Slideshow images={blueWillowImages1} />
      </div>
      <div className={styles.works}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectSection}>
            <h2>{project.title}</h2>
            <div className = {styles.gridGalleryContainer}>
            <GridGallery components={createSlideshowComponents(project.slideshows)} />
            </div>
            <p className={styles.projectDescription}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
