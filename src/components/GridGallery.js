import React from 'react';
import styles from './GridGallery.module.css'; // Import the CSS module

const GridGallery = ({ components }) => {
  return (
    <div className={styles.gridGallery}>
      {components.map((component, index) => (
        <div
          key={index}
          className={`${styles.gridItem} ${styles[`item${index + 1}`]}`}
        >
          {component}
        </div>
      ))}
    </div>
  );
};

export default GridGallery;
