import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.desktopMenu}>
        <Link to="/secret" className={styles.menuItem}>Secret</Link>
        <Link to="/works" className={styles.menuItem}>Works</Link>
      </div>
      <div>
        <Link to="/" className={styles.navbarLogo}>
          <img src="/ForPlayStudiosLogo.png" alt="For Play Studios Logo" />
        </Link>
      </div>
      <div className={styles.desktopMenu}>
        <Link to="/about" className={styles.menuItem}>About</Link>
        <Link to="/contact" className={styles.menuItem}>Contact</Link>
      </div>
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        <div className={`${styles.burgerIcon} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.fullScreenMenu}>
          <div className={styles.fullScreenMenuContent}>
            <Link to="/secret" className={styles.fullScreenMenuItem} onClick={toggleMenu}>Secret</Link>
            <Link to="/works" className={styles.fullScreenMenuItem} onClick={toggleMenu}>Works</Link>
            <Link to="/about" className={styles.fullScreenMenuItem} onClick={toggleMenu}>About</Link>
            <Link to="/contact" className={styles.fullScreenMenuItem} onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
