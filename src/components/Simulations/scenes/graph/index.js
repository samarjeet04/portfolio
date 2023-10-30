/* eslint-disable no-loop-func */
import * as THREE from "three";
import Graph from "./Graph";
import { Pane } from "tweakpane";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let controls,
  ground,
  scene,
  renderer,
  camera,
  nodes = [],
  graphContainer,
  pane,
  reached = false;

const settings = {
  MAX_NODES: 10,
  MAX_BOUNDS: 4,
  NODE_COLOR: 0x000000,
  EDGE_COLOR: 0x000000,
  NODE_SIZE: 0.1,
};

let graph = new Graph();

function refreshGraph(e) {
  createGraph(
    graph,
    settings.NODE_COLOR,
    settings.EDGE_COLOR,
    settings.NODE_SIZE
  );
}

export function renderScene(canvas) {
  init(canvas);
  pane = new Pane();

  refreshGraph();

  pane
    .addInput(settings, "MAX_NODES", { min: 1, max: 50, step: 1 })
    .on("change", refreshGraph);

  pane
    .addInput(settings, "MAX_BOUNDS", {
      min: 2,
      max: 20,
      step: 1,
      label: "EDGE LENGTH",
    })
    .on("change", refreshGraph);

  pane
    .addInput(settings, "NODE_COLOR", { view: "color" })
    .on("change", refreshGraph);

  pane
    .addInput(settings, "EDGE_COLOR", { view: "color" })
    .on("change", refreshGraph);

  pane
    .addInput(settings, "NODE_SIZE", { min: 0.01, max: 0.3, step: 0.01 })
    .on("change", refreshGraph);

  animate();
}

let call;

function animate() {
  call = requestAnimationFrame(animate);
  controls.update();
  if (camera.position.y >= 3 && !reached) {
    camera.position.z += 0.3;
    camera.position.y -= 0.3;
  } else {
    reached = true;
  }
  renderer.render(scene, camera);
}

export function dispose() {
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

function createGraph(
  graph,
  nodeColor = "black",
  edgeColor = "black",
  nodeSize = 0.1
) {
  graphContainer.children.forEach((child) => {
    if (child.type === "Mesh" || child.type === "Line") {
      child.geometry.dispose();
      child.material.dispose();
    }
  });
  graphContainer.children = [];
  graph = new Graph();
  nodes = [];

  for (let i = 0; i < settings.MAX_NODES; i++) {
    const node = new THREE.Mesh(
      new THREE.SphereBufferGeometry(nodeSize, 20, 20),
      new THREE.MeshPhongMaterial({ color: nodeColor })
    );
    node.position.set(
      getRandomNumber(settings.MAX_BOUNDS, true),
      getRandomNumber(settings.MAX_BOUNDS, false),
      getRandomNumber(settings.MAX_BOUNDS, true)
    );
    node.name = `node-${i}`;
    nodes.push(node);
  }

  nodes.forEach((node) => {
    graph.addVertex(node);
    graphContainer.add(node);
  });

  for (let i = 0; i < settings.MAX_NODES; i++) {
    for (let j = 0; j < settings.MAX_NODES; j++) {
      if (nodes[i].name !== nodes[j].name) {
        graph.addEdge(nodes[i], nodes[j]);
      }
    }
  }

  for (let i = 0; i < settings.MAX_NODES; i++) {
    const currentNode = nodes[i];
    const nbrs = graph.getNeighboursOf(currentNode);
    nbrs.forEach((nbr) => {
      if (graph.hasEdge(currentNode, nbr)) {
        addEdge(
          [currentNode.position.clone(), nbr.position.clone()],
          edgeColor
        );
      }
    });
  }

  scene.add(graphContainer);
}

function addEdge(
  vertices = [
    scene.children[5].position.clone(),
    scene.children[9].position.clone(),
  ],
  color
) {
  const curve = new THREE.CatmullRomCurve3(vertices);
  const points = curve.getPoints(50);
  const curveObject = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(points),
    new THREE.LineBasicMaterial({ color: color })
  );
  graphContainer.add(curveObject);
}

function init(canvas) {
  console.log("ran");
  graphContainer = new THREE.Group();
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.autoRotate = true;
  camera.position.set(0, 10, 0);
  const alight = new THREE.AmbientLight("grey");
  const dlight = new THREE.SpotLight("white");
  const frontLight = new THREE.SpotLight("white");
  frontLight.position.set(0, 10, 0);
  frontLight.castShadow = true;
  dlight.position.set(0, 10, 0);
  dlight.castShadow = true;
  let grid = new THREE.GridHelper(20, 10);
  grid.position.y = -1;
  grid.receiveShadow = true;
  ground = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20, 10, 10),
    new THREE.MeshPhongMaterial({ color: 0x777777 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1;
  ground.receiveShadow = true;
  scene.add(alight, frontLight, grid, ground);
}

export function getRandomNumber(max = 1, negativesAllowed) {
  if (negativesAllowed) {
    return Math.random() * max - max / 2;
  } else {
    return Math.random() * max;
  }
}

export function getRandomInt(max = 1, negativesAllowed) {
  if (negativesAllowed) {
    return Math.floor(Math.random() * max) - max / 2;
  } else {
    return Math.floor(Math.random() * max);
  }
}
