import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export default function MeshCircleGeometry({position}) {
  
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x += 0.01
    mesh.current.geometry.center()
  })

  /*
  circleGeometry args: 
  radius — Radius of the circle, default = 1.
  segments — Number of segments (triangles), minimum = 3, default = 8.
  thetaStart — Start angle for first segment, default = 0 (three o'clock position).
  thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
  */

  return (
    <mesh
      ref={mesh}
      position={position}
      >
      <circleGeometry attach='geometry' args={[5, 30, 0, 2*Math.PI]} />
      <meshStandardMaterial color={0x00ff00} />
    </mesh>
  )
}
