import React, { useRef, useState, useEffect } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  return (
    <div className="h-full">
      <iframe
        src="https://drive.google.com/file/d/1Bx5PTICzxWkhYSV8FtsrnE4ZVb2yQX9_/preview"
        width="100%"
        height="100%"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
