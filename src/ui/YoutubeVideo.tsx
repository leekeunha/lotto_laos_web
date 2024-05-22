import React from 'react';

const YouTubeVideo = ({ videoId }) => {
    return (
        <div className="w-full">
            {' '}
            <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubeVideo;
