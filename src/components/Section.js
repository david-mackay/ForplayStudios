import React from 'react';
import styles from './Section.module.css'; // Import the CSS module

const Section = ({ id, children }) => {
  return (
    <div id={id} className={styles.section}>
      {children}
    </div>
  );
};

export default Section;
