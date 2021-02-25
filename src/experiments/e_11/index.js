import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

const niceColors = ["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"]
const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()
const colors = new Array(1000).fill().map(() => niceColors[Math.floor(Math.random() * 5)])

function Boxes() {
  const colorArray = useMemo(() => Float32Array.from(new Array(1000).fill().flatMap((_, i) => tempColor.set(colors[i]).toArray())), [])
  const ref = useRef()
  useFrame(state =>{
    const time = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.sin(time / 2)
    ref.current.rotation.y = Math.sin(time / 2)
    let i = 0
    for (let x = 0; x < 10; x++)
      for (let y = 0; y < 10; y++)
        for (let z = 0; z < 10; z++) {
          const id = i++
          tempObject.position.set(5 - x, 5 - y, 5 - z)
          tempObject.rotation.y = Math.sin(x / 4 + time) + Math.sin(y / 4 + time) + Math.sin(z / 4 + time)
          tempObject.rotation.z = tempObject.rotation.y * 2
          const scale = 1
          tempObject.scale.set(scale, scale, scale)
          tempObject.updateMatrix()
          ref.current.setMatrixAt(id, tempObject.matrix)
        }
    ref.current.instanceMatrix.needsUpdate = true
  })
  return (
    <instancedMesh ref={ref} args={[null, null, 1000]}>
      <boxBufferGeometry attach="geometry" args={[0.7, 0.7, 0.7]}>
        <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colorArray, 3]} />
      </boxBufferGeometry>
      <meshPhongMaterial attach="material" vertexColors={THREE.VertexColors} />
    </instancedMesh>
  )
}

export default function Experiment11() {
  return (
    <div className="canvas_wrapper">
    <Canvas
    gl={{ antialias: false, alpha: false }}
    camera={{ position: [0, 0, 15], near: 5, far: 20 }}
    onCreated={({ gl }) => gl.setClearColor('#000000')}>      
      {/*An ambient light that creates a soft light against the object */}
      <ambientLight intensity={0.1} />
      {/*An directional light which aims form the given position */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {/*An point light, basically the same as directional. This one points from under */}
      <pointLight position={[0, -10, 5]} intensity={0.2} />

      <Boxes />

    </Canvas>
    </div>
  );
}
