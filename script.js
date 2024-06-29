import * as THREE from "./three.module.min.js";

// Scene Mesh Camera Renderer

// Scene
const scene = new THREE.Scene();

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;

scene.add(camera);

// Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

// Clock class
const clock = new THREE.Clock();

const animate = () => {
  // Get Elapsed Time
  const elapsedTime = clock.getElapsedTime();
  // console.log(elapsedTime);

  // Update Rotation on X Axis
  mesh.rotation.y = elapsedTime * Math.PI * 2;
  // mesh.position.x += 0.01;
  // mesh.position.y += 0.01;
  // Renderer
  renderer.render(scene, camera);

  // RequestAnimationFrame
  window.requestAnimationFrame(animate);
};

animate();

// function will get called 60 times per second on some devices 0.01 * 60 = 0.6 on x
// function will get called 120 times per second on some devices 0.01 * 120 = 1.2 on x
// fps stands for frames per second
