import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export default function MeshCylinderGeometry({position}) {
  
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
      <cylinderGeometry attach='geometry' args={[4, 4, 10, 30]} />
      <meshStandardMaterial color={0x00ff00} />
    </mesh>
  )
}
