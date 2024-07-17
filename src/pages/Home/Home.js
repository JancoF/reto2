
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import VideoCard from '../../components/VideoCard/VideoCard';
import EditModal from '../../components/EditModal/EditModal';

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    const handleEdit = (video) => {
        setCurrentVideo(video);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        setVideos(videos.filter(video => video.id !== id));
    };

    const handleUpdate = (updatedVideo) => {
        setVideos(videos.map(video => (video.id === updatedVideo.id ? updatedVideo : video)));
        setIsEditing(false);
    };

    return (
        <div>
            <Header />
            <div className="video-list">
                {videos.map(video => (
                    <VideoCard
                        key={video.id}
                        video={video}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
            {isEditing && <EditModal video={currentVideo} onClose={() => setIsEditing(false)} onSubmit={handleUpdate} />}
        </div>
    );
};

export default Home;
