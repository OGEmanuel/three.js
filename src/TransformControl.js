import { OrbitControls, TransformControls } from "@react-three/drei";

const TransformControl = () => {
  return (
    <>
      <OrbitControls makeDefault />

      <TransformControls position-x={2} mode="translate">
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color={"purple"} />
        </mesh>
      </TransformControls>
    </>
  );
};

export default TransformControl;
