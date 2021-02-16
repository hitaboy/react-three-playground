import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import Info from '../../Info.js'

export default function Experiment1() {
  
  let infoData = {
    title: "Exp 1 - Basic ineraction",
    description: `
      First react-three-fiber example from official repo. <a href='https://github.com/pmndrs/react-three-fiber'>Link</a><br>
      <ul>
        <li>We can control any element that has ref</li>
        <li>We can modify any attibute with states</li>
      </ul>
    `
  }

  return (
    <div className="canvas_wrapper">
      <Info data={infoData} />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  )
}

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}