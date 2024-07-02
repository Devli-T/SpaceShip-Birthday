import React from 'react';
import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';

import { Environment, OrbitControls, Sparkles } from '@react-three/drei';
import SpaceStation from './Scene';
/*import AudioPlayer from './AudioPlayer';*/

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
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
    </div>
  );
};

export default App;
