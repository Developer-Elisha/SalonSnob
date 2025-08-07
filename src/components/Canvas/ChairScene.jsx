// ChairScene.jsx
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Chair } from "../3d_Model/Chair";

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

      <Chair position={[0, -5, 0]} scale={10} castShadow />
    </Canvas>
  );
};

export default ChairScene;
