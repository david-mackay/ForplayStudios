import React from 'react';
import GridGallery from './GridGallery';
import Slideshow from './Slideshow';
import styles from './Works.module.css'; // Import the CSS module

const blueWillowImages1 = [
  '/bluewillow/entrancelandscape.jpg',
  '/bluewillow/landscapebigdiningroom.jpg',
  '/bluewillow/landscapebluewillowsignindoors.jpg',
];

const blueWillowImages2 = [
  '/bluewillow/somediningroom.jpg',
  '/bluewillow/showroomlandscape.jpg',
  '/bluewillow/privatelandscape.jpg',
];

const blueWillowImages3 = [
  '/bluewillow/verticalcornerentrance.jpg',
  '/bluewillow/bootheatingvertical.jpg',
  '/bluewillow/tablesetvertical.jpg',
];

const blueWillowImages4 = [
  '/bluewillow/landscapebigdiningroom.jpg',
  '/bluewillow/eatingarealandscape.jpg',
  '/bluewillow/barlandscape.jpg',
];

const yesApothecaryImages1 = [
  '/yesapothecary/landscapedecor.jpg',
  '/yesapothecary/landscapeseatingareafromback.jpg',
  '/yesapothecary/landscapebar.jpg',
];

const yesApothecaryImages2 = [
  '/yesapothecary/verticalseatingcorner.jpg',
  '/yesapothecary/verticaltableset.jpg',
  '/yesapothecary/verticalprivateroom.jpg',
];

const yesApothecaryImages3 = [
  '/yesapothecary/verticalbarangleclose.jpg',
  '/yesapothecary/verticalbooth.jpg',
  '/yesapothecary/verticalseatingarea.jpg',
];

const yesApothecaryImages4 = [
  '/yesapothecary/verticalprivatehallway.jpg',
  '/yesapothecary/verticalcocktaildressup.jpg',
  '/yesapothecary/verticalpeep.jpg',
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
