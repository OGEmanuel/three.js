import { Physics, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const PhysicsScene = () => {
  const cubeRef = useRef();
  const secondCubeRef = useRef();
  return (
    <>
      <Physics>
        <RigidBody
          ref={cubeRef}
          onCollisionEnter={() => console.log("Collision enter")}
          onCollisionExit={() => console.log("Collision exit")}
          onSleep={() => console.log("Sleeping")}
          onWake={() => console.log("Wake")}
          gravityScale={1}
          restitution={1}
          friction={1}
        >
          <mesh
            castShadow
            position={[1.5, 2.5, 0]}
            onClick={() =>
              cubeRef.current.applyTorqueImpulse({ x: 0, y: 5, z: 0 })
            }
          >
            <boxGeometry />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody>

        <RigidBody ref={secondCubeRef}>
          <mesh
            castShadow
            position={[-1.5, 2.5, 0]}
            onClick={() =>
              secondCubeRef.current.applyImpulse({ x: 8, y: 0, z: 0 })
            }
          >
            <boxGeometry />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed">
          <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
            <boxGeometry args={[15, 15, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};

export default PhysicsScene;
