import { PivotControls } from "@react-three/drei";

const PivotControl = () => {
  return (
    <>
      <PivotControls
        anchor={[-1, 0, 0]}
        depthTest={false}
        axisColors={["red", "green", "cyan"]}
        lineWidth={7}
        scale={2}
      >
        <mesh position-x={2} scale={2}>
          <boxGeometry />
          <meshBasicMaterial color={"purple"} />
        </mesh>
      </PivotControls>
    </>
  );
};

export default PivotControl;
