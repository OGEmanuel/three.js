import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Canvas
      camera={{
        fov: 45,
        near: 0.01,
        far: 100,
      }}
    >
      <Scene />
    </Canvas>
  </>
);
