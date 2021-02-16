import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'
import texture from './lavatile.jpg'

export default function Mesh() {
  
  const mesh = useRef()


  useFrame(() => {
    mesh.current.rotation.y += 0.01
    mesh.current.geometry.center()
  })

  const three_texture = new THREE.TextureLoader().load(texture)
  three_texture.wrapS = THREE.RepeatWrapping
  three_texture.wrapT = THREE.RepeatWrapping
  three_texture.repeat.set(1, 0.01);

  return (
    <mesh
      ref={mesh}
      position={[0,0,0]}
      >
      <coneGeometry attach='geometry' args={[5, 20, 32]} />
      <meshBasicMaterial attach='material' args={{ map: three_texture }}/>
    </mesh>
  )
}
