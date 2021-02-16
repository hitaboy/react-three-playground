import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'
import Roboto from './Roboto.json'

export default function Mesh() {
  
  const mesh = useRef()

  // parse JSON file with Three
  const font = new THREE.FontLoader().parse(Roboto);

  const textOptions = {
    font,
    size: 10,
    height: 1
  };

  useFrame(() => {
    mesh.current.rotation.y += 0.01
    mesh.current.geometry.center()
  })

  return (
    <mesh
      ref={mesh}
      position={[0,0,0]}
      >
      <textGeometry attach='geometry' args={['three.js', textOptions]} />
      <meshBasicMaterial attach='material' args={{ color: 0xff0000 }}/>
    </mesh>
  )
}
