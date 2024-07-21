import {
  Cloud,
  Environment,
  Lightformer,
  OrbitControls,
  Sky,
  Sparkles,
  Stars,
  useHelper,
} from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Scene = () => {
  const lightRef = useRef();
  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [0, 1, 0] },
  });
  const { meshIntensity } = useControls("mesh Intensity", {
    meshIntensity: { value: 1, min: 0, max: 5 },
  });
  const { height, radius, scale } = useControls("ground", {
    height: { value: 6, min: 0, max: 20 },
    radius: { value: 60, min: 0, max: 100 },
    scale: { value: 70, min: 0, max: 100 },
  });
  // useHelper(lightRef, DirectionalLightHelper, 1);

  return (
    <>
      <OrbitControls />
      {/* <ambientLight /> */}
      {/* <directionalLight position={[0, 1, 0]} color={"purple"} intensity={0.5} /> */}
      {/* <directionalLight castShadow ref={lightRef} /> */}

      <mesh position-y={1} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="#C7CAC7" envMapIntensity={meshIntensity} />
      </mesh>

      {/* <Sparkles
        count={300}
        speed={0.2}
        opacity={3}
        color={"#68C2ED"}
        scale={[10, 10, 10]}
        size={2}
      /> */}

      {/* <Stars
        radius={2}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <Cloud
        opacity={1}
        speed={0.2}
        width={10}
        depth={0.5}
        segments={20}
        depthTest={false}
      /> */}

      {/* <Sky sunPosition={sunPosition} /> */}

      <Environment
        // background
        files={"./envMap/1.hdr"}
        ground={{ height: height, radius: radius, scale: scale }}
        // files={[
        //   "./envMap/px.png",
        //   "./envMap/nx.png",
        //   "./envMap/py.png",
        //   "./envMap/ny.png",
        //   "./envMap/pz.png",
        //   "./envMap/nz.png",
        // ]}
      >
        {/* <Lightformer position-z={-1} scale={5} color={"orange"} intensity={5} /> */}
        {/* <mesh position-z={-1} scale={5}>
          <planeGeometry />
          <meshBasicMaterial color={"orange"} />
        </mesh> */}
      </Environment>

      <mesh receiveShadow position-y={0} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#CC3941" />
      </mesh>
    </>
  );
};

export default Scene;
