import { OrbitControls } from "@react-three/drei";

const OrbitControl = () => {
  return (
    <>
      <OrbitControls
        // enableDamping={true}
        // dampingFactor={0.05}
        // autoRotate={true}
        // autoRotateSpeed={2}
        maxAzimuthAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 4}
        minPolarAngle={-Math.PI / 4}
      />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="#B900F7" />
      </mesh>
    </>
  );
};

export default OrbitControl;
