import { a, useSpring, useSpringRef } from "@react-spring/three";

const Scene = () => {
  // const [spring, api] = useSpring(() => ({
  //   from: { x: -2 },
  // }));

  const springRef = useSpringRef();

  const spring = useSpring({
    ref: springRef,
    from: { x: -2 },
  });

  const clickHandler = () => {
    springRef.start({
      to: { x: 2 },
      config: { duration: 5000 },
    });
  };

  return (
    <>
      <a.mesh
        position-x={spring.x}
        onPointerOver={() => springRef.pause()}
        onPointerOut={() => springRef.resume()}
        onClick={clickHandler}
      >
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </a.mesh>
    </>
  );
};

export default Scene;
