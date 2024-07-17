import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavButtons = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    gap: 1rem;
  }
`;

const IconButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src="/img/logo.png" alt="AluraFlix" />
      <MobileNavButtons>
        <IconButton to="/">
          <Icon src="/img/Button.png" alt="Home" />
        </IconButton>
        <IconButton to="/nuevo-video">
          <Icon src="/img/NuevoVideo.png" alt="Nuevo Video" />
        </IconButton>
      </MobileNavButtons>
    </FooterContainer>
  );
};

export default Footer;