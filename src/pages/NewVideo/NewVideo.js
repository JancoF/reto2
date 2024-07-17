// src/pages/NewVideo/NewVideo.js
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import VideoForm from '../../components/VideoForm/VideoForm';
import { useNavigate } from 'react-router-dom';

const NewVideo = () => {
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();

    const handleSave = (video) => {
        setVideos([...videos, { ...video, id: Date.now() }]);
        navigate('/');
    };

    return (
        <div>
            <Header />
            <VideoForm onSubmit={handleSave} />
        </div>
    );
};

export default NewVideo;
