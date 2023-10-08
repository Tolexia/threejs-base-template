import './style.css'

import * as THREE from 'three'

var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
var camera = new THREE.PerspectiveCamera(45, 0, 1, 2000);
var mesh = null;

function initThree () {
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setClearColor(0x161216);
  camera.position.y = 0;
  camera.position.z = 2000;
  document.body.appendChild(renderer.domElement);
}

function resize () {
  renderer.height = window.innerHeight;
  renderer.width = window.innerWidth;
  renderer.setSize(renderer.width, renderer.height);
  camera.aspect = renderer.width / renderer.height;
  camera.updateProjectionMatrix();
}

function render() {
  renderer.render( scene, camera );
}

function animate() {
  render();
  requestAnimationFrame( animate );
}

function addObjects()
{
  
}

function init () {
  initThree()
  resize()
  window.addEventListener('resize', resize, { passive: true
  })
  addObjects()
  animate()
}
init()