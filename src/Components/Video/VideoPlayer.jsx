import React from 'react';

const VideoPlayer = () => {


  return (
    <div className="relative w-full h-full">
      
      <iframe
        title="Video Player"
        src="https://iframe.mediadelivery.net/embed/411923/50734dbb-277b-425a-a9b5-4f009206defa?token=ce31d2934a64c882d83f493c45ccae561aa13e9dd97a4cea534bfb32bfdcab11&expires=1745523413"
        width="100%"
        height="100%"
        allow="autoplay"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
