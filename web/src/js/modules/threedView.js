/**************************************************\
|   Authors : Santiago Sugrañes & Mathias Rogey
|
|   Description : Uses the THREE.js library
|           to construct a 3D environment.
\**************************************************/

import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.0/examples/jsm/controls/OrbitControls.js';

let camera, scene, renderer;

init();
animate();

function init() {
    //renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 100;

    const controls = new OrbitControls(camera, renderer.domElement);

    scene = new THREE.Scene();

    /*
    const geometry = new THREE.BoxGeometry(20, 20, 20);
    const material = new THREE.MeshToonMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    */

    window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    render();
}

function render() {
    renderer.render(scene, camera);
}