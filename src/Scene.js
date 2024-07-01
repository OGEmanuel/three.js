import { OrbitControls } from "@react-three/drei";
import Custom from "./custom";

const Scene = () => {
  return (
    <>
      <OrbitControls />
      {/* <axesHelper args={[3]} />
      <gridHelper args={[20, 20, 0xff0000, "cyan"]} /> */}

      <Custom />

      {/* <mesh>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh> */}
    </>
  );
};

export default Scene;
