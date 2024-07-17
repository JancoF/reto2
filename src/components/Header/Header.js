import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #000000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const NewVideoButton = styled(StyledLink)`
  background-color: #2A7AE4;
  
  &:hover {
    background-color: #5595E9;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src="/img/logo.png" alt="AluraFlix" />
      </Link>
      <NavButtons>
        <StyledLink to="/">Home</StyledLink>
        <NewVideoButton to="/nuevo-video">Nuevo video</NewVideoButton>
      </NavButtons>
    </HeaderContainer>
  );
};

export default Header;