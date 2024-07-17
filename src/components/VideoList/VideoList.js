import React from 'react';
import styled from 'styled-components';
import { useVideoContext } from '../../videoContext';
import VideoCard from '../VideoCard/VideoCard';

const ListContainer = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h2`
  color: ${props => props.color};
  margin-bottom: 1rem;
`;

const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const categoryColors = {
  'FRONT END': '#6BD1FF',
  'BACK END': '#00C86F',
  'INNOVACIÓN Y GESTIÓN': '#FF8C2A'
};

const VideoList = () => {
  const { videos } = useVideoContext();

  const groupedVideos = videos.reduce((acc, video) => {
    (acc[video.category] = acc[video.category] || []).push(video);
    return acc;
  }, {});

  return (
    <>
      {Object.entries(groupedVideos).map(([category, categoryVideos]) => (
        <ListContainer key={category}>
          <CategoryTitle color={categoryColors[category]}>{category}</CategoryTitle>
          <VideosGrid>
            {categoryVideos.map(video => (
              <VideoCard key={video.id} video={video} color={categoryColors[category]} />
            ))}
          </VideosGrid>
        </ListContainer>
      ))}
    </>
  );
};

export default VideoList;