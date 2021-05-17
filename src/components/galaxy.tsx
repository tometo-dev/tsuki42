import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import DatGui, { DatNumber } from "react-dat-gui"
import * as React from "react"
import "./react-dat-gui.css"
const MODEL_PATH = "/galaxy/scene.gltf"

interface GalaxyProps {
  position: [x: number, y: number, z: number]
}
function Galaxy({ position = [0, 0, 0] }: GalaxyProps) {
  const primitiveRef = React.useRef<any>(null)
  const gltf = useGLTF(MODEL_PATH)

  return (
    <primitive object={gltf.scene} position={position} ref={primitiveRef} />
  )
}
useGLTF.preload(MODEL_PATH)

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  )
}

function App() {
  const [data, setData] = React.useState({
    cameraX: 0,
    cameraY: 0,
    cameraZ: 0,
    positionX: 0,
    positionY: 0,
    positionZ: 0,
  })
  return (
    <div className="w-full h-full bg-black">
      <Canvas
        key={`x${data.cameraX}-y${data.cameraY}-z${data.cameraZ}`}
        camera={{
          position: [data.cameraX, data.cameraY, data.cameraZ],
          fov: 120,
        }}
        className="fixed top-0 left-0 w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <React.Suspense fallback={<Box />}>
          <Galaxy position={[data.positionX, data.positionY, data.positionZ]} />
        </React.Suspense>
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enablePan={true}
        />
      </Canvas>
      <DatGui data={data} onUpdate={setData}>
        <DatNumber path="cameraX" min={0} max={1000} step={1} />
        <DatNumber path="cameraY" min={0} max={1000} step={1} />
        <DatNumber path="cameraZ" min={0} max={1000} step={1} />
        <DatNumber path="positionX" min={-1500} max={1500} step={1} />
        <DatNumber path="positionY" min={-1500} max={1500} step={1} />
        <DatNumber path="positionZ" min={-1500} max={1500} step={1} />
      </DatGui>
    </div>
  )
}

export default App
