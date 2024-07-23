import { animated, useSpring } from "@react-spring/three";
import { useState } from "react";

const Scene = () => {
  const [click, setClick] = useState(false);
  const { scale, color } = useSpring({
    from: { scale: click ? 1 : 2, color: click ? "orange" : "hotpink" },
    to: { scale: click ? 2 : 1, color: click ? "hotpink" : "orange" },
  });

  // You don't have to name it scale

  console.log(scale);

  return (
    <>
      <animated.mesh onClick={() => setClick(!click)} scale={scale}>
        <boxGeometry />
        <animated.meshBasicMaterial color={color} />
      </animated.mesh>
    </>
  );
};

export default Scene;
