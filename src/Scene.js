import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  CubeCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Scene = () => {
  const cubeRef = useRef();

  useFrame((_, delta) => {
    // cubeRef.current.rotation.x += delta;
    // cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <OrbitControls />
      <Environment background files="./envMap/1.hdr" />
      {/* <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} /> */}

      <CubeCamera resolution={1024} frames={1}>
        {(texture) => (
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
              envMap={texture}
              roughness={0}
              metalness={0.9}
            />
          </mesh>
        )}
      </CubeCamera>
      <mesh ref={cubeRef} position-z={5}>
        <boxGeometry />
        <meshBasicMaterial color={"purple"} />
      </mesh>
    </>
  );
};

export default Scene;
