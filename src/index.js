import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Perf } from "r3f-perf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Canvas>
      <Scene />
      <Perf position="top-left" />
    </Canvas>
  </>
);
