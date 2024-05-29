// src/components/Section.js
import React from 'react';
import './Section.css';

const Section = ({ id, children }) => {
  return (
    <div id={id} className="section">
      {children}
    </div>
  );
};

export default Section;
