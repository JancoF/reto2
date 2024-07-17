import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background-image: url('/img/banner.png');
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding: 2rem;
`;

const CategoryCard = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1rem;
  border-radius: 4px;
  max-width: 500px;
`;

const CategoryTitle = styled.h2`
  color: #6BD1FF;
  margin-bottom: 0.5rem;
`;

const CategoryDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <CategoryCard>
        <CategoryTitle>FRONT END</CategoryTitle>
        <CategoryDescription>
          Challenge React
        </CategoryDescription>
        <CategoryDescription>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás 
          comprometerte en la resolución de un problema para poder aplicar todos los 
          conocimientos adquiridos en la formación React.
        </CategoryDescription>
      </CategoryCard>
    </HeroContainer>
  );
};

export default Hero;