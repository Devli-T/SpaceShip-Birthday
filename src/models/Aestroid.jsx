import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('https://keqcipjzpgqocvqhovbr.supabase.co/storage/v1/object/public/Models/aestroid.gltf');
  const asteroidRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const radius = 10; // Adjust the radius for larger or smaller orbits
    const speed = 0.3; // Adjust speed, higher values make the orbit faster
    asteroidRef.current.position.x = Math.sin(time * speed) * radius;
    asteroidRef.current.position.y = Math.cos(time * speed) * radius;
    asteroidRef.current.position.z = Math.sin(time * speed) * radius;
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