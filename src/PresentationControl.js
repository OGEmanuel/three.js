import { PresentationControls } from "@react-three/drei";

const PresentationControl = () => {
  return (
    <>
      <PresentationControls
        global
        polar={[Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
      >
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color="#B900F7" />
        </mesh>
      </PresentationControls>
    </>
  );
};

export default PresentationControl;
