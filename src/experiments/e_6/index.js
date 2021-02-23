import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { 
  CubeTextureLoader,
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter 
} from "three";
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

// Loads the skybox texture and applies it to the scene.
function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "/ex5/1.jpg",
    "/ex5/3.jpg",
    "/ex5/1.jpg",
    "/ex5/4.jpg",
    "/ex5/5.jpg",
    "/ex5/2.jpg",
  ]);
  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}

// Geometry
function Sphere() {
  const { scene, gl } = useThree();
  // The cubeRenderTarget is used to generate a texture for the reflective sphere.
  // It must be updated on each frame in order to track camera movement and other changes.
  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter,
  });
  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 100, 0);
  scene.add(cubeCamera);
  // Update the cubeCamera with current renderer and scene.
  useFrame(() => cubeCamera.update(gl, scene));
  return (
    <>

    <mesh visible position={[-1.5, 2.2, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[1, 32, 32]} />
      <meshBasicMaterial
        attach="material"
        envMap={cubeCamera.renderTarget.texture}
        roughness={0.1}
        metalness={1}
        lightMapIntensity={100}
        reflectivity={1}
      />
    </mesh>

    <mesh visible position={[1.5, 2.2, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[1, 32, 32]} />
      <meshLambertMaterial
        attach="material"
        color={0xffcc00}
        transparent={true}
        envMap={cubeCamera.renderTarget.texture}
        reflectivity={0.3}
      />
    </mesh>

    <mesh visible position={[-1.5, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[1, 32, 32]} />
      <meshPhongMaterial
        attach="material"
        color={0x8866ff}
        transparent={true}
        shininess={100}
        reflectivity={1}
        reflectionRatio={1}
        specular={0xffffff}
      />
    </mesh>

    <mesh visible position={[1.5, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[1, 32, 32]} />
      <meshToonMaterial
        attach="material"
        color={0x00c000}
        transparent={false}
        shininess={150}
        reflectivity={1}
        reflectionRatio={1}
        specular={0xffffff}
      />
    </mesh>

    <mesh visible position={[-1.5, -2.2, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[1, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        envMap={cubeCamera.renderTarget.texture}
        roughness={0.2}
        metalness={1}
        lightMapIntensity={0}
        reflectivity={1}
        transparent={true}
        emissive={0x333388}
        emissiveIntensity={0.2}
      />
    </mesh>

    <mesh visible position={[1.5, -2.2, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[1, 32, 32]} />
      <meshPhysicalMaterial
        attach="material"
        emissive={0xcd0000}
        clearcoat={0.1}
        clearcoatRoughness={0.17}
        roughness={0.2}
        metalness={0.8}
        transparent={true}
      />
    </mesh>
  
    </>
  );
}

// Lights
function Experiment6() {
  return (
    <div className="canvas_wrapper">
      <Info data={infoData} />
      <Canvas camera={{ fov: 100, position: [0,0,5] }}>
        <CameraControls />
        <Sphere />
        <SkyBox />
        {/*An ambient light that creates a soft light against the object */}
        <ambientLight intensity={0.1} />
        {/*An point light, basically the same as directional. This one points from under */}
        <pointLight position={[-100, 100, 0]} />
      </Canvas>
    </div>
  );
}

export default Experiment6;

let infoData = {
  title: "Exp 2 - Materials",
  description: `<ul>
  <li>Pending...</li>
  <ul>
  `
}