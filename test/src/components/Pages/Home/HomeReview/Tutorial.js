import React from 'react';
import YouTube from 'react-youtube';

const Tutorial = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: false,
    },
  };
  return (
    <div className="container mx-auto d-flex justify-content-center my-5">
      <div>
        <h2 className="text-center text-info my-3">Learn With Us</h2>
        <YouTube videoId="uOx14qaAglE" opts={opts} />
      </div>
    </div>
  );
};

export default Tutorial;
