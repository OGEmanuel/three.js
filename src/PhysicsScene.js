// https://pmndrs.github.io/react-three-rapier/

import {
  CapsuleCollider,
  CuboidCollider,
  Debug,
  Physics,
  RigidBody,
} from "@react-three/rapier";

const PhysicsScene = () => {
  return (
    <Physics gravity={[0, -9.81, 0]}>
      <Debug />
      <RigidBody colliders={false} position={[1.5, 1.5, 0]}>
        <CuboidCollider args={[0.5, 0.5, 0.5]} />
        {/* <CuboidCollider args={[0.25, 0.25, 0.25]} position={[-2, -1, -2.5]} /> */}
        <mesh castShadow>
          <boxGeometry />
          <meshStandardMaterial color="#CC3941" />
        </mesh>
        {/* <mesh
          castShadow
          position={[0, 1.5, 0]}
          position-z={-2}
          scale={[0.25, 3, 1]}
        >
          <boxGeometry />
          <meshStandardMaterial color="#CC3941" />
        </mesh> */}
      </RigidBody>

      <RigidBody colliders={"trimesh"}>
        <mesh position={[-1.5, 1.5, 0]}>
          <torusKnotBufferGeometry args={[0.5, 0.15, 100, 100]} />
          <meshStandardMaterial color={"orange"} />
        </mesh>
      </RigidBody>

      <RigidBody colliders={false} mass={20} position={[0, 1.5, -1.5]}>
        <CapsuleCollider args={[0.375, 0.6]} />
        <mesh>
          <sphereGeometry args={[0.75, 64, 64]} />
          <meshStandardMaterial color={"#23B278"} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed">
        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
          <boxGeometry args={[8, 8, 0.35]} />
          <meshStandardMaterial color="#C7CAC7" />
        </mesh>
      </RigidBody>
    </Physics>
  );
};

export default PhysicsScene;
