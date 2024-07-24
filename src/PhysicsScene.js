// https://pmndrs.github.io/react-three-rapier/

import { Physics, RigidBody } from "@react-three/rapier";

const PhysicsScene = () => {
  return (
    <Physics gravity={[0, -9.81, 0]}>
      <RigidBody>
        <mesh castShadow position={[0, 1.5, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#CC3941" />
        </mesh>
        <mesh
          castShadow
          position={[0, 1.5, 0]}
          position-z={-2}
          scale={[0.25, 3, 1]}
        >
          <boxGeometry />
          <meshStandardMaterial color="#CC3941" />
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
