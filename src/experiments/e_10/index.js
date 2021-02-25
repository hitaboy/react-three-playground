import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber'
import * as meshline from 'threejs-meshline'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

extend(meshline)
extend({ OrbitControls })

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame with useFrame
  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={false}
      enableZoom={false}
    />
  );
}


function Fatline({onDebug}) {
  const ref = useRef()
  const pos = new THREE.Vector3(0,0,0)
  const points = new Array(5).fill().map(() => pos.add(new THREE.Vector3(4 - Math.random() * 8, 4 - Math.random() * 8, 2 - Math.random() * 4)).clone())
  const curve = new THREE.CatmullRomCurve3(points).getPoints(1000)
  useFrame(state => {
    const time = state.clock.getElapsedTime()/2
    ref.current.vertices.map((vertice)=>{
      // console.log(vertice)
      onDebug(vertice)
    })
    // tempObject.position.set(-Math.tan(x + time)*4, 0, Math.cos(x + time)*4)
    // ref.current.setMatrixAt(id, tempObject.matrix)
    //ref.current.instanceMatrix.needsUpdate = true
  })
  return (
    <mesh>
      <meshLine attach="geometry" ref={ref} vertices={curve} />
      <meshLineMaterial attach="material" transparent depthTest={false} lineWidth={1} color={"#ff0000"}  />
    </mesh>
  )
}

const tempObject = new THREE.Object3D()

function Boxes({onDebug, form}) {
  const ref = useRef()
  useFrame(state =>{
    const time = state.clock.getElapsedTime()/2
    // ref.current.rotation.x = Math.sin(time / 2)
    // ref.current.rotation.y = Math.sin(time / 2)
    let i = 0
    for (let x = 0; x < 36; x++){
        const id = i++
        // tempObject.position.set(2.5-x, 2.5-y, 0)
        if(form === "tan"){
          tempObject.position.set(-Math.tan(x + time)*4, 0, Math.cos(x + time)*4)
        }else if( form === "atan" ){
          tempObject.position.set(-Math.cos(x + time)*6, 0, Math.tan(x + time)*2)
        }else if( form === "circle" ){
          tempObject.position.set(-Math.sin(x + time)*8, x*Math.sin(x/100), Math.cos(x + time)*8)
        }
        // onDebug(x*Math.sin(x / 4 + time))
        // tempObject.rotation.y = Math.sin(x / 4 + time) + Math.sin(y / 4 + time) + Math.sin(z / 4 + time)
        // tempObject.rotation.z = tempObject.rotation.y * 2
        const scale = 1
        tempObject.scale.set(scale, scale, scale)
        tempObject.updateMatrix()
        ref.current.setMatrixAt(id, tempObject.matrix)
    }
    ref.current.instanceMatrix.needsUpdate = true
  })
  return (
    <instancedMesh ref={ref} args={[null, null, 1000]}>
      <sphereBufferGeometry args={[0.2]} />
      <meshPhongMaterial
        attach="material"
        color={0x8866ff}
        transparent={true}
        shininess={100}
        reflectivity={1}
        reflectionRatio={1}
        specular={0xffffff} />
    </instancedMesh>
  )
}

function Box({onDebug}) {
  const ref = useRef()
  
  return (
    <mesh visible ref={ref} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        roughness={0.2}
        reflectivity={0}
        transparent={true}
        emissive={0x333388}
        opacity={1}
        emissiveIntensity={1} />
    </mesh>
  )
}

export default function Experiment10() {

  const [debug, setDebug] = useState("Loading...")

  return (
    <div className="canvas_wrapper">
    <div className="debug">{debug}</div>
    <Canvas
    camera={{ position: [0, 6, 30], near: 1, far: 1000 }}>
      <color attach="background" args={["#000000"]} />      
      {/*An ambient light that creates a soft light against the object */}
      <ambientLight intensity={0.1} />
      {/*An directional light which aims form the given position */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {/*An point light, basically the same as directional. This one points from under */}
      <pointLight position={[0, -10, 35]} intensity={0.2} />
      <Boxes onDebug={(data)=> setDebug(data)} form="atan" />
      <Boxes onDebug={(data)=> setDebug(data)} form="tan" />
      <Boxes onDebug={(data)=> setDebug(data)} form="circle" />
      <Box onDebug={(data)=> setDebug(data)} />
      <Fatline onDebug={(data)=> setDebug(data)} />
      <CameraControls />
    </Canvas>
    </div>
  );
}
