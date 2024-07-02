import React from 'react';

const AudioPlayer = () => {
  return (
    <div>
      <audio src="interstellar.mp3" controls autoPlay loop>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;