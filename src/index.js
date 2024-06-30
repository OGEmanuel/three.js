import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <>
  //     <div className="container">
  <Canvas
  // camera={{
  //   fov: 45,
  //   near: 0.1,
  //   far: 100,
  //   position: [2, 2, 5],
  // }}
  >
    {/* <group> */}
    <Scene />
    {/* <mesh position={[2, 0, 0]} scale={1.5}>
            <torusKnotGeometry />
            <meshNormalMaterial />
          </mesh> */}
    {/* </group> */}
  </Canvas>
  //     </div>
  //   </>
);
