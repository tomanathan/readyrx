import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/images/pharmacists.jpg'; // Ensure this path is correct

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${backgroundImage}) no-repeat center center/cover;
  color: #fff;
  text-align: center;
  padding: 0 20px;
  box-sizing: border-box;
`;

const HeroContent = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const HeroText = styled(motion.h1)`
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7); /* Increase shadow for better legibility */
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  padding: 12px 36px;
  font-size: 1.1rem;
  color: #ffffff;
  background: linear-gradient(135deg, #6dd5ed 0%, #2193b0 100%);
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.4s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%);
    color: #ffffff;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Wave = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <HeroText
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to ReadyRx
        </HeroText>
        <HeroButton
          href="#about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </HeroButton>
      </HeroContent>
      <Wave src="/assets/svgs/wave.svg" alt="Wave" />
    </HeroSection>
  );
}

export default Hero;
