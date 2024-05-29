import React, { useEffect, useState } from 'react';
import '../GlobalStyles.css'; // Import the global styles

const LogoOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Total duration for the overlay to stay visible

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`logo-overlay ${!isVisible ? 'hidden' : ''}`}>
      <img src="/ForPlayStudiosLogo.png" alt="For Play Studios Logo" />
    </div>
  );
};

export default LogoOverlay;
