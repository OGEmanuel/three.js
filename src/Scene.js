// import { OrbitControls } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

extend({ OrbitControls: OrbitControls });

const Scene = () => {
  const cubeRef = useRef();
  const planeRef = useRef();
  const { gl, camera } = useThree();
  //   camera.position.x = 5;

  useFrame((state, delta) => {
    // cubeRef.current.rotation.y += delta;
    // planeRef.current.rotation.y += delta;
    state.camera.position.x = Math.sin(state.clock.elapsedTime);
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      {/* <OrbitControls /> */}
      <mesh ref={planeRef} position-x={-2}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color="orange" side={DoubleSide} />
      </mesh>
      <mesh ref={cubeRef} position-x={2}>
        <boxGeometry />
        <meshBasicMaterial color="#7A00CA" />
      </mesh>
    </>
  );
};

export default Scene;
