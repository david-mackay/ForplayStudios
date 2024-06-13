import React from 'react';
import { Link } from 'react-router-dom';
import GridGallery from './GridGallery';
import Slideshow from './Slideshow';
import styles from './Works.module.css'; 

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

const portfolioImages = [
  '/bluewillow/entrancelandscape.jpg',
  '/yesapothecary/landscapedecor.jpg',
  '/redsorghum/image4.jpg',
];

const nomadImages1 = [
  '/nomad/grand.jpg',
  '/nomad/cashierhost.jpg',
  '/nomad/openkitchen.jpg',
];

const nomadImages2 = [
  '/nomad/openkitchen.jpg',
  '/nomad/bar.jpg',
  '/nomad/grand.jpg',
];

const nomadImages3 =[
  '/nomad/bar.jpg',
  '/nomad/entrance.jpg',
  '/nomad/booth.jpg',
  'nomad/mainbarandbooth.jpg',
];

const nomadImages4 = [
  '/nomad/mainbarandbooth.jpg',
  '/nomad/entrance.jpg',
  '/nomad/cashierhost.jpg',
];


const projects = [
  {
    title: 'Blue Willow',
    link: '/blue-willow',
    slideshows: [blueWillowImages1, blueWillowImages2, blueWillowImages3, blueWillowImages4],
    description: 'Blue Willow is a Sichuan restaurant that offers a rich blend of traditional flavors with a modern twist.'
  },
  {
    title: 'Ye\'s Apothecary',
    link: '/yes-apothecary',
    slideshows: [yesApothecaryImages1, yesApothecaryImages2, yesApothecaryImages3, yesApothecaryImages4],
    description: 'Ye\'s Apothecary is a Shanghai nostalgia speakeasy, providing an immersive experience that transports guests to a bygone era.'
  },
  {
    title: 'Red Sorghum',
    link: '/red-sorghum',
    slideshows: [redSorghumImages1, redSorghumImages2, redSorghumImages3, redSorghumImages4],
    description: 'Red Sorghum is a Sichuan restaurant that offers a rich blend of traditional flavors with a modern twist.'
  },
  {
    title: 'Nomad Tea Parlour',
    link: '/nomad-tea-parlour',
    slideshows: [nomadImages1, nomadImages2, nomadImages3, nomadImages4],
    description: 'Nomad Tea Parlour is a chic modern Dim Sum parlour located in the Flatiron District of Manhattan.'
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
        <Slideshow images={portfolioImages} />
      </div>
      <div className={styles.works}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectSection}>
            <Link to={project.link} className={styles.projectLink}>
              <h2>{project.title}</h2>
            </Link>
            <div className={styles.gridGalleryContainer}>
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
