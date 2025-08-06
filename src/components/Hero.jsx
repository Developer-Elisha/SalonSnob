import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Chair } from "./Chair"

const Hero = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#C09F7B] my-10 w-[90%] rounded-4xl  h-full flex items-center">
        <div className="justify-start items-center px-28 w-[50%]">
          <h1 className="text-8xl font-Liberty-Regular text-[#3A280D]">Visit Our <br /> <span className="px-10 text-9xl">Salon</span></h1>
        </div>

        <div className="flex justify-end items-center w-[50%] h-[600px] p-4">
          <Canvas camera={{ position: [0, 3, 15], fov: 50 }}>
            <Environment preset="city" />
            <OrbitControls
              enableZoom={false}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 2.5}
            />
            <Chair position={[0, -6.5, 0]} scale={11} />
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default Hero