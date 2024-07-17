import React from 'react';
import styled from 'styled-components';
import { useVideoContext } from '../../videoContext';

const Card = styled.div`
  background-color: #2C2C2C;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  color: #FFFFFF;
  margin: 0 0 0.5rem 0;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  gap: 5px;
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const VideoCard = ({ video }) => {
  const { deleteVideo, startEditing } = useVideoContext();

  return (
    <Card>
      <Image src={video.imageUrl} alt={video.title} />
      <ButtonContainer>
        <Button onClick={() => startEditing(video)}>Editar</Button>
        <Button onClick={() => deleteVideo(video.id)}>Borrar</Button>
      </ButtonContainer>
      <Info>
        <Title>{video.title}</Title>
      </Info>
    </Card>
  );
};

export default VideoCard;