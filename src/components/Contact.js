import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '../animations';

const ContactSection = styled.section`
  padding: 100px 20px;
  background-color: #ffffff;
  text-align: center;
`;

const ContactContent = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto;
`;

const ContactTitle = styled.h2`
  margin-bottom: 20px;
  color: #2b6e5d;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const SubmitButton = styled(motion.button)`
  padding: 10px 20px;
  color: #fff;
  background-color: #2b6e5d;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e4d42;
  }
`;

function Contact() {
  const [formStatus, setFormStatus] = useState('');
  const [ref, inView] = useInView({ triggerOnce: true });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setFormStatus('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        setFormStatus('Failed to send message. Please try again.');
      });

    e.target.reset(); // Clear the form after submission
  };

  return (
    <ContactSection id="contact" ref={ref}>
      <ContactContent variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactForm onSubmit={sendEmail}>
          <Input type="text" name="name" placeholder="Name" required />
          <Input type="email" name="email" placeholder="Email" required />
          <TextArea name="message" rows="5" placeholder="Message" required />
          <SubmitButton type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Send Message
          </SubmitButton>
          {formStatus && <p>{formStatus}</p>}
        </ContactForm>
      </ContactContent>
    </ContactSection>
  );
}

export default Contact;
