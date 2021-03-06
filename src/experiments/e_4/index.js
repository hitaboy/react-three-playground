import { Canvas } from 'react-three-fiber'
import Info from '../../Info.js'
import MeshBoxGeometry from './boxGeometry.js'
import MeshCircleGeometry from './circleGeometry.js'
import MeshConeGeometry from './coneGeometry.js'
import MeshCylinderGeometry from './cylinderGeometry.js'
import MeshDodecahedronGeometry from './dodecahedronGeometry.js'


export default function Experiment4() {
  
  let infoData = {
    title: "Exp 2 - Adding Text",
    description: `<ul>
    <li>Font converted with <a href='http://gero3.github.io/facetype.js/'>Facetype.js</a></li>
    <li><b>useFrame</b> ( and any react-three-fiber hook ) can only be used within the Canvas component</li>
    <li><em>mesh.current.geometry.center()</em> helps centering mesh anchor point</li>
    <ul>
    `
  }

  return (
    <div className="canvas_wrapper">
      <Info data={infoData} />
      <Canvas camera={{ fov: 55, far: 2000, position: [0,0,150] }} >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshBoxGeometry position={[-100, 0, 0]} />
        <MeshCircleGeometry position={[-50, 0, 0]} />
        <MeshConeGeometry position={[0, 0, 0]} />
        <MeshCylinderGeometry position={[50,0,0]} />
        <MeshDodecahedronGeometry position={[100, 0, 0]} />
      </Canvas>
    </div>
  )
}
