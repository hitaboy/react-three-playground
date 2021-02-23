import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export default function MeshConeGeometry({position}) {
  
  const mesh = useRef()


  useFrame(() => {
    mesh.current.rotation.x += 0.01
    mesh.current.geometry.center()
  })

  /*
  coneGeometry args: 
  radius — Radius of the cone base. Default is 1.
  height — Height of the cone. Default is 1.
  radialSegments — Number of segmented faces around the circumference of the cone. Default is 8
  heightSegments — Number of rows of faces along the height of the cone. Default is 1.
  openEnded — A Boolean indicating whether the base of the cone is open or capped. Default is false, meaning capped.
  thetaStart — Start angle for first segment, default = 0 (three o'clock position).
  thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cone.
  */

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
