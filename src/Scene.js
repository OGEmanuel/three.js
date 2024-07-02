import { OrbitControls } from "@react-three/drei";
import Particles from "./Particles";

const Scene = () => {
  return (
    <>
      <OrbitControls />

      {/* <mesh>
        <planeGeometry />
        <meshBasicMaterial />
      </mesh> */}
      <Particles />
    </>
  );
};

export default Scene;
