import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const creatingCanvasHandler = (state) => {
//   state.gl.setClearColor("cyan", 0.5);
// };

root.render(
  <>
    <Canvas
      // orthographic
      gl={{ antialias: true, alpha: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        // zoom: 120,
        position: [2, 2, 6],
      }}
      // onCreated={creatingCanvasHandler}
    >
      <Scene />
    </Canvas>
  </>
);
