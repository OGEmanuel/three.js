import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
      <Scene />
    </Canvas>
  </>
);
