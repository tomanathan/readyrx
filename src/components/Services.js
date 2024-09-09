// src/components/Services.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, staggerContainer } from '../animations';
import { useInView } from 'react-intersection-observer';

const ServicesSection = styled.section`
  padding: 100px 20px;
  background-color: #ffffff;
  text-align: center;
`;

const ServiceWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ServiceCard = styled(motion.div)`
  width: 300px;
  margin: 20px;
  padding: 20px;
  background-color: #f0f4f7;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ServiceTitle = styled.h3`
  margin-bottom: 10px;
  color: #2b6e5d;
`;

const ServiceDescription = styled.p`
  color: #666;
`;

function Services() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <ServicesSection id="services" ref={ref}>
      <h2>Our Services</h2>
      <ServiceWrapper
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <ServiceCard variants={slideInFromLeft}>
          <ServiceTitle>Prescription Refills</ServiceTitle>
          <ServiceDescription>
            Quick and easy prescription refills, delivered to your door.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard variants={slideInFromRight}>
          <ServiceTitle>Health Consultations</ServiceTitle>
          <ServiceDescription>
            Speak with our pharmacists for personalized health advice.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard variants={slideInFromLeft}>
          <ServiceTitle>Over-the-Counter Medications</ServiceTitle>
          <ServiceDescription>
            Browse our wide range of OTC medications and health products.
          </ServiceDescription>
        </ServiceCard>
      </ServiceWrapper>
    </ServicesSection>
  );
}

export default Services;
