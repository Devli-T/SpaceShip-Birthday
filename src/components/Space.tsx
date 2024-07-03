import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';

import { Environment, OrbitControls, Sparkles } from '@react-three/drei';
import SpaceStation from '../Scene';
import AudioPlayer from './AudioPlayer';

const Space = () => {
  return (
    <div>
      <div className="top-left-text">Loading resources from remote server may take time. Please be patient.</div>
      <div className="top-right-text">Search for the rocket ship!</div>
      <Canvas>
      <Suspense fallback={null}>
          <ambientLight intensity = {1.5}/>
          <OrbitControls minDistance={4} maxDistance={15}/>
          <SpaceStation />
          <Sparkles size={2} color={"#fffff"} scale={[10,10,10]} />
      </Suspense>
      <Environment preset="sunset" />
      </Canvas>
      <AudioPlayer />
    </div>
  );
};

export default Space;