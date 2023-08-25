let scene, camera, renderer, geometry, material, hypercube;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('scene-container').appendChild(renderer.domElement);

  geometry = new THREE.BoxGeometry();
  material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

  hypercube = new THREE.Mesh(geometry, material);
  scene.add(hypercube);

  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);

  hypercube.rotation.x += 0.01;
  hypercube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

init();
animate();
