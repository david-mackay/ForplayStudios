import React, { useEffect, useState } from 'react';
import styles from './Slideshow.module.css'; // Import the CSS module

const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(images.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousSlide(currentSlide);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentSlide, images.length]);

  return (
    <div className={styles.slideshowContainer}>
      {images.map((slideImage, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === currentSlide
              ? styles.current
              : index === previousSlide
              ? styles.previous
              : styles.next
          }`}
          style={{ backgroundImage: `url(${slideImage})` }}
        ></div>
      ))}
    </div>
  );
};

export default Slideshow;
