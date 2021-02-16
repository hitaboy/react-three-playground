import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export default function MeshConeGeometry({position}) {
  
  const mesh = useRef()


  useFrame(() => {
    mesh.current.rotation.x += 0.01
    mesh.current.geometry.center()
  })

  

  return (
    <mesh
      ref={mesh}
      position={position}
      >
      <coneGeometry attach='geometry' args={[5, 10, 30]} />
      <meshStandardMaterial color={0x00ff00} />
    </mesh>
  )
}
