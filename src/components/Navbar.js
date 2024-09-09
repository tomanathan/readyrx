import React from 'react';
import styled from 'styled-components';
import logoImage from '/Users/mackbook/Documents/Pharmapp/readyrx/src/assets/images/2024-08-23.jpg';

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  background-color: #ffffff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Logo = styled.img`
  height: 100px;
`;

const NavLinks = styled.div`
  a {
    margin: 0 15px;
    color: #2b6e5d;
    font-weight: 500;
    position: relative;

    &:hover::after {
      width: 100%;
      left: 0;
    }

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -5px;
      height: 2px;
      width: 0;
      background-color: #2b6e5d;
      transition: width 0.3s ease, left 0.3s ease;
    }
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo src={logoImage} alt="ReadyRx Logo" />
      <NavLinks>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
