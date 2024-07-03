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
  const [isSpaceStationClicked, setIsSpaceStationClicked] = useState(false);

  const handleSpaceStationClick = () => {
    setIsSpaceStationClicked(true);
    console.log('SpaceStation clicked');
  };

  
  return (
    <div>
      <div className="top-left-text">Loading resources from remote server may take time. Please be patient.</div>
      <div className="top-right-text">Search for the rocket ship!</div>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={1.5}/>
          <OrbitControls minDistance={4} maxDistance={15} panSpeed={1}/>
          <SpaceStation position={[0, 0, 0]} scale={[1, 1, 1]} />
          <Skybox size={1} position={[0, 0, 0]} scale={[1, 1, 1]}/>
          <Aestroid position={[0, 1, 5]} scale={[0.004, 0.004, 0.004]} onClick={handleSpaceStationClick}/>
          <Sparkles size={2} color={"#ffffff"} scale={[10,10,10]} />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
      <AudioPlayer />
    </div>
  );
};

export default Space;