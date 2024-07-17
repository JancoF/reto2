import React from 'react';
import VideoList from '../VideoList/VideoList';
import Hero from '../Hero/Hero';
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
       <Hero/>
      <Title>Videos de AluraFlix</Title> 
       
      <VideoList />
   
    </HomeContainer>
  );
};

export default Home;