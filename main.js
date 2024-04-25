import './style.css';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

// Camera and Rendering
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);
renderer.render(scene, camera);

// glb
const gltfLoader = new GLTFLoader();
const url = 's_test.glb';
gltfLoader.load(url, (gltf) => {
  const root = gltf.scene;
  scene.add(root);
});

// Lighting
const pointLight = new THREE.PointLight( 0x0000ff, 200000, 0, 2.2 );
pointLight.position.set( 110, -50, -5 );
const ambientLight = new THREE.AmbientLight( 0xfff000, 1 );
scene.add( pointLight, ambientLight );

// Helpers
const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)
const controls = new OrbitControls(camera, renderer.domElement);

// Stars
function addStar() {
    const starGeometry = new THREE.SphereGeometry(0.25, 24, 24);
    const starMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff });
    const star = new THREE.Mesh( starGeometry, starMaterial )

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread (100) )

    star.position.set(x, y, z);
    scene.add(star)
}
Array(200).fill().forEach(addStar)
const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();