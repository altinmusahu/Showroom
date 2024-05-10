import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
    const opts = {
        height: '660',
        width: '940',
        playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: videoId,
            controls: 0,
        },
    };

    const onVideoEnd = (event) => {
        event.target.playVideo(); // Cue the video again when it ends
    };


    return (
        <div className="p-24" style={{ backgroundColor: '#003329' }}>
            <div className='flex justify-center'>
                <YouTube videoId={videoId} opts={opts} onEnd={onVideoEnd}/>
            </div>
        </div>
    );
};

export default VideoPlayer;
