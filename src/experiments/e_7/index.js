import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Info from '../../Info.js'

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

// Geometry
function Sphere() {
  const { scene, gl } = useThree();
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <torusKnotGeometry attach="geometry" args={[2, 0.3, 200, 150]} />
      <meshDepthMaterial
        attach="material"
      />
    </mesh>
  )
}

// Lights
function Experiment7() {
  return (
    <div className="canvas_wrapper back_black">
      <Info data={infoData} />
      <Canvas camera={{ fov: 100, position: [0,0,3.5] }} background={0xff0000}>
        <CameraControls />
        <Sphere />
      </Canvas>
    </div>
  );
}

export default Experiment7;

let infoData = {
  title: "Exp 2 - Materials",
  description: `<ul>
  <li>Pending...</li>
  <ul>
  `
}