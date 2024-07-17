import React from 'react';
import VideoList from '../VideoList/VideoList';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #FFFFFF;
  margin-bottom: 1rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Videos de AluraFlix</Title>
      <VideoList />
    </HomeContainer>
  );
};

export default Home;