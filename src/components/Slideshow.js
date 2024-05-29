import React, { useEffect, useState } from 'react';
import './Slideshow.css';

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
    <div className="slideshow-container">
      {images.map((slideImage, index) => (
        <div
          key={index}
          className={`slide ${
            index === currentSlide
              ? 'current'
              : index === previousSlide
              ? 'previous'
              : 'next'
          }`}
          style={{ backgroundImage: `url(${slideImage})` }}
        ></div>
      ))}
    </div>
  );
};

export default Slideshow;
