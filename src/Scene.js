import { OrbitControls } from "@react-three/drei";
import { a, useSprings, useTrail } from "@react-spring/three";

const items = [
  {
    initialPosition: [-3.5, 0, 0],
    finalPosition: [-1.5, 0, 0],
  },
  {
    initialPosition: [0, 3.5, 0],
    finalPosition: [0, 0, 0],
  },
  {
    initialPosition: [3.5, 0, 0],
    finalPosition: [1.5, 0, 0],
  },
];

const Scene = () => {
  const [trail, api] = useTrail(3, () => ({
    from: { scale: 0 },
    // to: { scale: 0.6 },
  }));

  let active = true;

  const missedHandler = () => {
    if (active) {
      active = false;
      api.start({ to: { scale: 0.6 } });
    } else {
      active = true;
      api.start({ to: { scale: 0 } });
    }
  };

  return (
    <>
      <OrbitControls />

      {trail.map((item, i) => (
        <a.mesh
          key={Math.random()}
          scale={item.scale}
          position-x={-1 + i}
          onPointerMissed={missedHandler}
        >
          <boxGeometry />
          <meshBasicMaterial color="orange" />
        </a.mesh>
      ))}
    </>
  );
};

export default Scene;
