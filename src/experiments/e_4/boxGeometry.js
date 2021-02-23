import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export default function MeshBoxGeometry({position}) {
  
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.z += 0.001
    mesh.current.geometry.center()
  })

  /*
  boxGeometry args: 
  width — Width; that is, the length of the edges parallel to the X axis. Optional; defaults to 1.
  height — Height; that is, the length of the edges parallel to the Y axis. Optional; defaults to 1.
  depth — Depth; that is, the length of the edges parallel to the Z axis. Optional; defaults to 1.
  widthSegments — Number of segmented rectangular faces along the width of the sides. Optional; defaults to 1.
  heightSegments — Number of segmented rectangular faces along the height of the sides. Optional; defaults to 1.
  depthSegments — Number of segmented rectangular faces along the depth of the sides. Optional; defaults to 1.
  */

  return (
    <mesh
      ref={mesh}
      position={position}
      >
      <boxGeometry attach='geometry' args={[5, 5, 5]} />
      <meshStandardMaterial color={0x00ff00} />
    </mesh>
  )
}
