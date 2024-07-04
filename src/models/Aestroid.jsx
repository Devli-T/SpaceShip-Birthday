import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('https://keqcipjzpgqocvqhovbr.supabase.co/storage/v1/object/public/Models/aestroid.gltf');
  const asteroidRef = useRef();

  // Rotation logic
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const radius = 25; 
    const eliptic = 1.3;
    const speed = 0.4; 
    const offset = 17;
    asteroidRef.current.position.x = (-Math.sin(time * speed) * radius) + offset;
    asteroidRef.current.position.z = Math.cos(time * speed) * (radius / eliptic);

    asteroidRef.current.rotation.y = -time / 2;
  });

  return (
    <group ref={asteroidRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Object001_mtl} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Object001_mtl} />
      </group>
    </group>
  );
}