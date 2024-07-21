import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const Model = () => {
  //   const model = useLoader(GLTFLoader, "./model/dog.glb");
  const model = useGLTF("./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);
  console.log(model);
  console.log(animations);

  useEffect(() => {
    animations.actions.Show.play();
  }, []);

  return <primitive position-y={0.4} object={model.scene} />;
};

useGLTF.preload("./model/dog.glb");

export default Model;
