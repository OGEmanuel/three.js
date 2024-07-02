import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

const Particles = () => {
  const particles = useRef();
  useFrame((_, delta) => {
    particles.current.rotation.y += delta * 0.1;
    particles.current.rotation.x += delta * 0.1;
  });
  const texture = useLoader(TextureLoader, "./img/snow.jpg");

  const verticesAmount = 2000;
  const positionArray = new Float32Array(verticesAmount * 3);

  for (let i = 0; i < verticesAmount * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 10.0;
  }

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positionArray.length}
          itemSize={3}
          array={positionArray}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        transparent
        depthTest={false}
        alphaMap={texture}
      />
    </points>
  );
};

export default Particles;
