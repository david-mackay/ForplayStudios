import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: transparent;
  color: #e0e0e0;
  position: fixed; /* Ensure the header is fixed at the top */
  top: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    background: #2f2f2f; /* To provide a background when menu is open */
  }
`;

const Logo = styled.h1`
  color: #ff6347;
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${(props) => (props.open ? 'flex' : 'none')};
  }
`;

const StyledLink = styled(Link)`
  color: #e0e0e0;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff6347;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => (props.active ? '100%' : '0')};
    height: 2px;
    background: #ff6347;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ff6347;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <Logo>ForPlayStudios</Logo>
      <Nav open={open}>
        <StyledLink to="/" active={location.pathname === '/'}>Home</StyledLink>
        <StyledLink to="/portfolio" active={location.pathname === '/portfolio'}>Portfolio</StyledLink>
        <StyledLink to="/about" active={location.pathname === '/about'}>About</StyledLink>
        <StyledLink to="/contact" active={location.pathname === '/contact'}>Contact</StyledLink>
      </Nav>
      <MenuButton onClick={toggleMenu}>
        {open ? <FiX /> : <FiMenu />}
      </MenuButton>
    </HeaderWrapper>
  );
};

export default Header;
