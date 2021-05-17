import { OrbitControls, Stars } from "@react-three/drei"
import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber"
import * as React from "react"
import * as THREE from "three"

type TColor = [r: number, g: number, b: number]

const initialColor: TColor = [0, 0, 1]
const finalColor: TColor = [0.1, 0.5, 1]

function Plane() {
  const plane = React.useRef<any>()
  const frameCount = React.useRef(0.01)

  React.useLayoutEffect(() => {
    const colors = []
    for (let i = 0; i < plane.current.geometry.attributes.position.count; i++) {
      colors.push(0, 0, 1)
    }
    plane.current.geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(new Float32Array(colors), 3),
    )
  }, [])

  React.useLayoutEffect(() => {
    const position = plane.current.geometry.attributes.position
    const { array } = position
    const randomValues = []
    for (let i = 0; i < array.length; i++) {
      if (i % 3 === 0) {
        const x = array[i]
        const y = array[i + 1]
        const z = array[i + 2]

        array[i] = x + (Math.random() - 0.5)
        array[i + 1] = y + (Math.random() - 0.5)
        array[i + 2] = z + (Math.random() - 0.5)
      }

      randomValues.push(Math.random() * Math.PI * 2)

      position.originalPosition = position.array
      position.randomValues = randomValues
    }
  }, [])

  useFrame(() => {
    const { array, originalPosition, randomValues } =
      plane.current.geometry.attributes.position

    for (let i = 0; i < array.length; i += 3) {
      array[i] =
        originalPosition[i] +
        Math.cos(frameCount.current + randomValues[i]) * 0.003

      array[i + 1] =
        originalPosition[i + 1] +
        Math.sin(frameCount.current + randomValues[i + 1]) * 0.003
    }
    plane.current.geometry.attributes.position.needsUpdate = true
    frameCount.current += 0.01

    if (frameCount.current >= 10000) {
      frameCount.current = 0.01
    }
  })

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    const { intersections } = event
    const intersection: any = intersections[0]

    function changeColor(colorObject: any, color: TColor) {
      // vertex 1
      colorObject.setX(intersection.face.a, color[0])
      colorObject.setY(intersection.face.a, color[1])
      colorObject.setZ(intersection.face.a, color[2])

      // vertex 2
      colorObject.setX(intersection.face.b, color[0])
      colorObject.setY(intersection.face.b, color[1])
      colorObject.setZ(intersection.face.b, color[2])

      // vertex 3
      colorObject.setX(intersection.face.c, color[0])
      colorObject.setY(intersection.face.c, color[1])
      colorObject.setZ(intersection.face.c, color[2])

      colorObject.needsUpdate = true
    }

    if (intersection) {
      const { color } = intersection.object.geometry.attributes
      changeColor(color, finalColor)

      window.setTimeout(() => {
        changeColor(color, initialColor)
      }, 500)
    }
  }

  return (
    <mesh ref={plane} onPointerMove={handlePointerMove}>
      <planeGeometry args={[3, 3, 20, 20]} />
      <meshPhongMaterial side={THREE.DoubleSide} flatShading vertexColors />
    </mesh>
  )
}

export default function Home() {
  return (
    <Canvas
      camera={{
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1000,
        position: [0, 0, 5],
      }}
      className="bg-black"
    >
      <directionalLight color="white" intensity={1} position={[0, 0, 1]} />
      <directionalLight color="white" intensity={1} position={[0, 0, -1]} />
      <Stars />
      <Plane />
      <OrbitControls />
    </Canvas>
  )
}
