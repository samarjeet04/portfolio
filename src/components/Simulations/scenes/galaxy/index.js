import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Pane } from "tweakpane";

let controls,
  scene,
  renderer,
  camera,
  geometry = null,
  positions = null,
  colors = null,
  material = null,
  pane,
  points = null;

const params = {
  pointSize: 0.01,
  count: 250000,
  branches: 3,
  radius: 5,
  spin: 1,
  randomness: 0.2,
  randomnessPower: 3,
  innerColor: "#ff6030",
  outerColor: "#1b3984",
};

export function renderGalaxy(canvas) {
  init(canvas);

  pane = new Pane();

  pane
    .addInput(params, "pointSize", {
      label: "point size",
      min: 0.0001,
      max: 0.1,
      step: 0.0001,
    })
    .on("change", createGalaxy);

  pane
    .addInput(params, "count", {
      label: "total points",
      min: 100,
      max: 1000000,
      step: 100,
    })
    .on("change", createGalaxy);

  pane
    .addInput(params, "branches", {
      min: 3,
      max: 20,
      step: 1,
    })
    .on("change", createGalaxy);

  pane
    .addInput(params, "radius", {
      min: 1,
      max: 20,
      step: 0.01,
    })
    .on("change", createGalaxy);

  pane
    .addInput(params, "spin", {
      min: -5,
      max: 5,
      step: 0.001,
    })
    .on("change", createGalaxy);

  pane
    .addInput(params, "randomness", {
      min: 0,
      max: 2,
      step: 0.001,
    })
    .on("change", createGalaxy);

  pane
    .addInput(params, "randomnessPower", {
      min: 1,
      max: 10,
      step: 0.001,
    })
    .on("change", createGalaxy);

  pane
    .addInput(params, "innerColor", {
      view: "color",
    })
    .on("change", createGalaxy);

  pane
    .addInput(params, "outerColor", {
      view: "color",
    })
    .on("change", createGalaxy);

  createGalaxy();

  animate();
}

let call;

function animate() {
  call = requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

export function dispose() {
  console.log("lull");
  geometry.dispose();
  material.dispose();
  scene.remove(points);
  scene.children.forEach((child) => {
    if (child.type === "Mesh") {
      child.geometry.dispose();
      child.material.dispose();
    }
  });
  scene.children = [];
  cancelAnimationFrame(call);
  pane.dispose();
  renderer.dispose();
}

function createGalaxy() {
  if (points !== null) {
    geometry.dispose();
    material.dispose();
    scene.remove(points);
  }

  geometry = new THREE.BufferGeometry();

  positions = new Float32Array(params.count * 3);
  colors = new Float32Array(params.count * 3); // *3 because r, g, b

  const innerColor = new THREE.Color(params.innerColor);
  const outerColor = new THREE.Color(params.outerColor);

  for (let i = 0; i < params.count; i++) {
    // here by radius (on the left) we mean distance of current vertex from the center (origin)
    const radius = Math.random() * params.radius;

    // Color of current vertex
    const finalColor = innerColor.clone();
    finalColor.lerp(outerColor, radius / params.radius);

    colors[i * 3] = finalColor.r;
    colors[i * 3 + 1] = finalColor.g;
    colors[i * 3 + 2] = finalColor.b;

    // Position of current vertex
    const spinOffset = radius * params.spin;
    const branchAngle = ((i % params.branches) / params.branches) * Math.PI * 2;

    const xOffset =
      Math.pow(Math.random(), params.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1);
    const yOffset =
      Math.pow(Math.random(), params.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1);
    const zOffset =
      Math.pow(Math.random(), params.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1);

    positions[i * 3] = Math.cos(branchAngle + spinOffset) * radius + xOffset;
    positions[i * 3 + 1] = 0 + yOffset;
    positions[i * 3 + 2] =
      Math.sin(branchAngle + spinOffset) * radius + zOffset;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  material = new THREE.PointsMaterial({
    size: params.pointSize,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });
  points = new THREE.Points(geometry, material);
  scene.add(points);
}

function init(canvas) {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.autoRotate = true;
  camera.position.set(-3, 3, 3);
}
