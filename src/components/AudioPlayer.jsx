import React, { useEffect, useRef, useState } from 'react';

const AudioPlayer = () => {
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