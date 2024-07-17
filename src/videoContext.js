import React, { createContext, useState, useContext } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [editingVideo, setEditingVideo] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const addVideo = (video) => {
    setVideos([...videos, { ...video, id: Date.now() }]);
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  const editVideo = (id, updatedVideo) => {
    setVideos(videos.map(video => video.id === id ? { ...updatedVideo, id } : video));
    setEditingVideo(null);
    setIsEditModalOpen(false);
  };

  const startEditing = (video) => {
    setEditingVideo(video);
    setIsEditModalOpen(true);
  };

  const stopEditing = () => {
    setEditingVideo(null);
    setIsEditModalOpen(false);
  };

  return (
    <VideoContext.Provider value={{ 
      videos, 
      addVideo, 
      deleteVideo, 
      editVideo, 
      editingVideo, 
      startEditing, 
      stopEditing,
      isEditModalOpen,
      setIsEditModalOpen
    }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => useContext(VideoContext);