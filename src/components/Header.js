import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: ${(props) => (props.transparent ? 'transparent' : '#2f2f2f')};
  color: #e0e0e0;
  box-shadow: ${(props) => (props.transparent ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.1)')};
  position: ${(props) => (props.transparent ? 'absolute' : 'fixed')};
  width: 100%;
  z-index: 3;
  box-sizing: border-box;
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;  // Smooth transition for background and box-shadow
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: #e0e0e0;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.3s ease-in-out;  // Smooth transition for color

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
    transition: width 0.3s ease-in-out;  // Smooth transition for underline
  }

  &:hover::after {
    width: 100%;
  }
`;

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <HeaderWrapper transparent={isHomePage}>
      <h1 style={{ color: '#ff6347' }}>ForPlayStudios</h1>
      <Nav>
        <StyledLink to="/" active={location.pathname === '/'}>Home</StyledLink>
        <StyledLink to="/portfolio" active={location.pathname === '/portfolio'}>Portfolio</StyledLink>
        <StyledLink to="/about" active={location.pathname === '/about'}>About</StyledLink>
        <StyledLink to="/contact" active={location.pathname === '/contact'}>Contact</StyledLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
