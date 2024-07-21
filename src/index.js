import "./Style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    camera={{
      fov: 75,
      near: 0.1,
      far: 200,
      position: [-3, 2, 4],
    }}
  >
    <Scene />
  </Canvas>
);
