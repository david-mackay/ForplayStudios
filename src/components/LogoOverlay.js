import React, { useEffect, useState } from 'react';
import styles from '../GlobalStyles.module.css'; // Import the CSS module

const LogoOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Total duration for the overlay to stay visible

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.logoOverlay} ${!isVisible ? styles.hidden : ''}`}>
      <img src="/ForPlayStudiosLogo.png" alt="For Play Studios Logo" />
    </div>
  );
};

export default LogoOverlay;
