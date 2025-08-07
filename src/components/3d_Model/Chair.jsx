import { useGLTF } from '@react-three/drei'

export function Chair(props) {
  const { nodes, materials } = useGLTF('/models/Chair.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['Quilted brown leather']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Material__27}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Chair.glb')
