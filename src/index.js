import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Canvas
      shadows
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        position: [1, 3, 6],
      }}
    >
      <Scene />
    </Canvas>
  </>
);
