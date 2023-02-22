import './style.css';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Scene is the container that holds all our objects, cameras, lights

const scene = new THREE.Scene();

// arguments (a, b, c, d)
// a: field of view in degrees - the amount that is visible
// b: aspect ratio, based on user's browser window
// c & d: the view frustrum - controlling which objectss are visible relative to the camera (0.1 to 1000 is basically everything) 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Renderer needs to know which DOM element to use 
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);
renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });

// This is what we add to the scene
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

function animate() {
  // Tells the browser we want to perform an animation
  requestAnimationFrame(animate);

  torus.rotation.x += 0.005;
  torus.rotation.y += 0.0005;
  torus.rotation.z += 0.005;

  renderer.render(scene, camera);
};

animate();