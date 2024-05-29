// src/components/TestImages.js
import React from 'react';

const images = [
  'background/image1.jpg',
  'background/image2.jpg',
  'background/image3.jpg'
];

const TestImages = () => {
  return (
    <div>
      {images.map((img, idx) => (
        <div key={idx} style={{ backgroundImage: `url(${img})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <p style={{ color: 'white' }}>Image {idx + 1}</p>
        </div>
      ))}
    </div>
  );
};

export default TestImages;
