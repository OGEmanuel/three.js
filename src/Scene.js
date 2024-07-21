import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { Suspense } from "react";
import Bike from "./Bike";

const Scene = () => {
  return (
    <>
      {/* <mesh>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial />
      </mesh> */}
      <ambientLight intensity={2} />
      <directionalLight />
      <OrbitControls />

      {/* <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh> */}

      <Suspense
        fallback={
          <mesh scale-y={2}>
            <boxGeometry />
            <meshBasicMaterial wireframe />
          </mesh>
        }
      >
        {/* {true ? <Model /> : ""} */}
        <Model />
      </Suspense>

      {/* <Bike scale={0.85} position={[-0.5, 0.75, 0]} /> */}
    </>
  );
};

export default Scene;
