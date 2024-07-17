import React from 'react';
import styled from 'styled-components';
import { useVideoContext } from '../../videoContext';

const Card = styled.div`
  background-color: ${props => props.color};
  border: 2px solid ${props => props.color};
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px ${props => props.color}80;
`;

const Title = styled.h3`
  color: #FFFFFF;
  margin: 0.5rem;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
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

const VideoCard = ({ video, color }) => {
  const { deleteVideo, startEditing } = useVideoContext();

  return (
    <Card color={color}>
      <Title>{video.title}</Title>
      <Image src={video.imageUrl} alt={video.title} />
      <ButtonContainer>
        <Button onClick={() => startEditing(video)}>Editar</Button>
        <Button onClick={() => deleteVideo(video.id)}>Borrar</Button>
      </ButtonContainer>
    </Card>
  );
};

export default VideoCard;