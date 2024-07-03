import React, { useEffect, useRef, useState } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef(null);

  // Begins the audio player on non-server render load.
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);
  
  // Requires the user to have done **something** prior to this. Chrome v66 and all that 
  //    Ref: https://developer.chrome.com/blog/autoplay#:~:text=Note%3A%20The%20Autoplay%20Policy%20launched,web%20pages%20using%20audio%20features.
  // Also audio has a weird end to it. Stole it from a NCS youtube vid lol. This needs trimming.
  return (
    <div>
      <audio
        ref={audioRef}
        src="https://keqcipjzpgqocvqhovbr.supabase.co/storage/v1/object/public/Audio/Interstellar_theme_NCS.mp3?t=2024-07-03T00%3A04%3A40.940Zhttps://keqcipjzpgqocvqhovbr.supabase.co/storage/v1/object/public/Audio/Interstellar_theme_NCS.mp3?"
        loop
        hidden
      />
    </div>
  );
};

export default AudioPlayer;