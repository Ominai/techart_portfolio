import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Testing Push
// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);
renderer.render(scene, camera);

// Shapes
const torusgeometry = new THREE.TorusGeometry(12, 1, 32, 160);
const torusmaterial = new THREE.MeshStandardMaterial({ color: 0xdaa520 });
const torus = new THREE.Mesh(torusgeometry, torusmaterial);
const knotgeometry = new THREE.TorusKnotGeometry( 3, 1.5, 150, 18, 2, 7 ); 
const knotmaterial = new THREE.MeshStandardMaterial( { color: 0xdaa520 } ); 
const torusKnot = new THREE.Mesh( knotgeometry, knotmaterial ); 
scene.add( torus );

// Lighting
const pointLight = new THREE.PointLight( 0x0000ff, 200000, 0, 2.2 );
pointLight.position.set( 0, -50, -5 );
const ambientLight = new THREE.AmbientLight( 0xfff000, 1 );
scene.add( pointLight, ambientLight );

// Helpers
//const lightHelper = new THREE.PointLightHelper(pointLight)
//const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper, gridHelper)

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

// Avatar
const ravinTexture = new THREE.TextureLoader().load('avatar.png');

const ravin = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial( { map: ravinTexture } )
);

scene.add(ravin);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    //torusKnot.rotation.x -= 0.01;
    //torusKnot.rotation.y -= 0.01;
    //torusKnot.rotation.z -= 0.01;

    ravin.rotation.x -= 0.01;
    ravin.rotation.y -= 0.01;
    ravin.rotation.z -= 0.01;

    controls.update();

    renderer.render(scene, camera);
}

animate();