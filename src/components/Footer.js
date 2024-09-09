// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #2b6e5d;
  color: #fff;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} ReadyRx. All Rights Reserved.</p>
      <p> Phone: 214-838-0500</p>
      <p> Fax: 214-838-0600</p>
      <p> Email: info@readyrx.us</p>
      <p> Address: 4640 Long Prairie Road, Suite 300, Flower Mound TX, 75028</p>
    </FooterContainer>
  );
}

export default Footer;
