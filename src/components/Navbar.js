import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/ForPlayStudiosLogo.png" alt="For Play Studios Logo" />
      </Link>
      <div className="desktop-menu">
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
