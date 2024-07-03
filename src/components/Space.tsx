import React, { useState } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import '../App.css';

import { Environment, OrbitControls, Sparkles } from '@react-three/drei';
import SpaceStation from '../models/SpaceStation';
import AudioPlayer from './AudioPlayer';
import Aestroid from '../models/Aestroid';
import Skybox from '../models/Skybox';

const Space = () => {
  const [isAesteroidClicked, setAesteroidClicked] = useState(false);

  const handleAesteroidClicked = () => {
    if (isAesteroidClicked) return;
    setAesteroidClicked(true);
  };

  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={1.5}/>
          <OrbitControls minDistance={4} maxDistance={15} panSpeed={0.4}/>
          <SpaceStation position={[0, 0, 0]} scale={[1, 1, 1]} />
          <Skybox size={1} position={[0, 0, 0]} scale={[1, 1, 1]}/>
          <Aestroid position={[0, 1, 5]} scale={[0.004, 0.004, 0.004]} onClick={handleAesteroidClicked}/>
          <Sparkles size={2} color={"#ffffff"} scale={[10,10,10]} />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
      <div className="top-left-text">Loading resources from remote server may take time. Please be patient.</div>
      <div className="top-right-text">Search for the Asteroid!</div>
      <AudioPlayer />
    </div>
  );
};

export default Space;