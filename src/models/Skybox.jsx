/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 aestroid.gltf 
Author: admone (https://sketchfab.com/admone)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/asteroid-80a70567fb2a42df836e6d70204e0b68
Title: asteroid
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('https://keqcipjzpgqocvqhovbr.supabase.co/storage/v1/object/public/Models/aestroid.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Object001_mtl} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Object001_mtl} />
      </group>
    </group>
  )
}

useGLTF.preload('https://keqcipjzpgqocvqhovbr.supabase.co/storage/v1/object/public/Models/aestroid.gltf')