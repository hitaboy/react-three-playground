import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export default function MeshDodecahedronGeometry({position}) {
  
  const mesh = useRef()


  useFrame(() => {
    mesh.current.rotation.y += 0.01
    mesh.current.geometry.center()
  })

  return (
    <mesh
      ref={mesh}
      position={position}
      >
      <dodecahedronGeometry attach='geometry' args={[6, 0]} />
      <meshStandardMaterial color={0x00ff00} />
    </mesh>
  )
}
