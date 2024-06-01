import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setIsVisible(false);
      } else {
        // if scroll up show the navbar
        setIsVisible(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <Link to="/" className="navbar-logo">
        <img src="/ForPlayStudiosLogo.png" alt="For Play Studios Logo" />
      </Link>
      <div className="desktop-menu">
      <Link to="/secret" className="menu-item">Secret</Link>
        <Link to="/works">Works</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="mobile-menu">
        <Menu right>
          <Link to="/works" className="menu-item">Works</Link>
          <Link to="/about" className="menu-item">About</Link>
          <Link to="/contact" className="menu-item">Contact</Link>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
