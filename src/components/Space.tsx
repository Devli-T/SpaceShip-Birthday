import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import '../App.css';

import { Environment, OrbitControls, Sparkles } from '@react-three/drei';
import SpaceStation from '../models/SpaceStation';
import AudioPlayer from './AudioPlayer';
import Aestroid from '../models/Aestroid';

const Space = () => {
  return (
    <div>
      <div className="top-left-text">Loading resources from remote server may take time. Please be patient.</div>
      <div className="top-right-text">Search for the rocket ship!</div>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={1.5}/>
          <OrbitControls minDistance={0} maxDistance={15} panSpeed={0}/>
          <SpaceStation position={[0, 0, 0]} scale={[1, 1, 1]} />
          <Aestroid size={1} position={[0, 0, 0]} scale={[1, 1, 1]}/>
          <Aestroid position={[0, 1, 5]} scale={[0.004, 0.004, 0.004]}/>
          <Sparkles size={2} color={"#ffffff"} scale={[10,10,10]} />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
      <AudioPlayer />
    </div>
  );
};

export default Space;