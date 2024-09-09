import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pharmacyTeamImage from '../assets/images/pharmacy-team.jpg'; // Import the image

const AboutSection = styled.section`
  padding: 100px 20px;
  background-color: #f7f9fb;
  text-align: center;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const AboutContent = styled(motion.div)`
  padding: 20px;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #2b6e5d;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: '';
    width: 50px;
    height: 4px;
    background-color: #2193b0;
    position: absolute;
    left: 0;
    bottom: -10px;
    border-radius: 2px;
  }
`;

const AboutText = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 40px;
`;

const AboutImage = styled(motion.img)`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const AboutButton = styled(motion.a)`
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

function About() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <AboutSection id="about">
      <AboutContainer ref={ref}>
        <AboutContent
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <AboutTitle>About ReadyRx</AboutTitle>
          <AboutText>
          ReadyRx is a trusted, family-owned community pharmacy dedicated to serving patients across Texas. With deep roots in the local Flower Mound area, we take pride in offering personalized care and top-quality service to every customer who walks through our doors. We know every patient individually, and give them the absolute best in personalized care.        </AboutText>
          <AboutButton
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </AboutButton>
        </AboutContent>
        <AboutImage
          src={pharmacyTeamImage} // Use the imported image here
          alt="Pharmacy Team"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        />
      </AboutContainer>
    </AboutSection>
  );
}

export default About;
