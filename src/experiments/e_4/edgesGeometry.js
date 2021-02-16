import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export default function MeshEdgesGeometry({position}) {
  
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
      <edgesGeometry attach='geometry' args={[100, 100, 100]} />
      <meshStandardMaterial color={0x00ff00} />
    </mesh>
  )
}
