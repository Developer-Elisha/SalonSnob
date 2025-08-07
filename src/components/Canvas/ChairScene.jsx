// ChairScene.jsx
import { Environment, OrbitControls, Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Chair } from "../3d_Model/Chair";

// Loader Component
const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center">
        {/* Circular progress ring */}
        <svg className="w-20 h-20 transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r="35"
            stroke="#ffffff33"
            strokeWidth="6"
            fill="transparent"
          />
          <circle
            cx="40"
            cy="40"
            r="35"
            stroke="#ab6937"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={2 * Math.PI * 35}
            strokeDashoffset={
              2 * Math.PI * 35 - (progress / 100) * (2 * Math.PI * 35)
            }
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.3s ease" }}
          />
        </svg>

        {/* Percentage Text */}
        <p className="mt-3 text-white text-lg font-bold">{progress.toFixed(0)}%</p>
        <p className="text-white text-sm">Loading model...</p>
      </div>
    </Html>
  );
};

const ChairScene = () => {
  return (
    <Canvas
      className="cursor-pointer"
      camera={{ position: [0, 3, 15], fov: 50 }}
      shadows
    >
      <Environment preset="city" />

      {/* LIGHT SOURCE WITH SHADOW */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      <ambientLight intensity={0.3} />

      {/* SHADOW RECEIVER */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.3} />
      </mesh>

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
        autoRotate={true}
      />

      {/* Show loader until model is loaded */}
      <Suspense fallback={<Loader />}>
        <Chair position={[0, -5, 0]} scale={10} castShadow />
      </Suspense>
    </Canvas>
  );
};

export default ChairScene;
