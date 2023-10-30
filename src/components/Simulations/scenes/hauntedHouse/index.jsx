import * as THREE from "three";
import { TextureLoader } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import wallBrickNormal from "../../../../images/badlands-boulders_normal-ogl.png";
import { PCFSoftShadowMap } from "three";

let controls, ground, scene, renderer, camera, ghosts;

const textureLoader = new TextureLoader();

const wallTexture = textureLoader.load(
  "https://res.cloudinary.com/daa4wqa2h/image/upload/v1648994558/badlands-boulders_albedo_fqiyrw.png"
);
const wallTextureNormal = textureLoader.load(wallBrickNormal);
const wallTextureAO = textureLoader.load(
  "https://res.cloudinary.com/daa4wqa2h/image/upload/v1648994547/badlands-boulders_ao_fo3jv3.png"
);

const woodTexture = textureLoader.load(
  "https://res.cloudinary.com/daa4wqa2h/image/upload/v1648994876/wood-diffuse_smcbzr.jpg"
);
const woodTextureNormal = textureLoader.load(
  "https://res.cloudinary.com/daa4wqa2h/image/upload/v1648994877/wood-normal_fh4ahz.jpg"
);

const grassTexture = textureLoader.load(
  "https://res.cloudinary.com/daa4wqa2h/image/upload/v1648994878/grass1024_isse1y.png"
);
grassTexture.wrapT = THREE.RepeatWrapping;
grassTexture.wrapS = THREE.RepeatWrapping;

const graveTexture = textureLoader.load(
  "https://res.cloudinary.com/daa4wqa2h/image/upload/v1648994524/damp-rocky-ground1-albedo_lgkrmy.png"
);
const graveTextureAO = textureLoader.load(
  "https://res.cloudinary.com/daa4wqa2h/image/upload/v1648994502/damp-rocky-ground1-ao_coximx.png"
);
const graveTextureNormal = textureLoader.load(
  "https://res.cloudinary.com/daa4wqa2h/image/upload/v1648994517/damp-rocky-ground1-Normal-ogl_zqdbc1.png"
);

const bushG = new THREE.SphereBufferGeometry(1, 16, 16);
const bushM = new THREE.MeshStandardMaterial({ color: "#89c854" });

const graveG = new THREE.BoxBufferGeometry(0.6, 1.4, 0.2);
const graveM = new THREE.MeshStandardMaterial({
  // color: "#b2b6b1",
  map: graveTexture,
  aoMap: graveTextureAO,
  normalMap: graveTextureNormal,
});

export function renderHauntedHouse(canvas) {
  init(canvas);

  const house = new THREE.Group();
  house.position.y += 0.5;
  scene.add(house);

  const walls = new THREE.Mesh(
    new THREE.BoxBufferGeometry(4, 3, 4, 200, 200),
    new THREE.MeshStandardMaterial({
      // color: "#ac8e82",
      transparent: true,
      map: wallTexture,
      normalMap: wallTextureNormal,
      aoMap: wallTextureAO,
    })
  );
  walls.castShadow = true;
  house.add(walls);

  const roof = new THREE.Mesh(
    new THREE.ConeBufferGeometry(4, 2, 4),
    new THREE.MeshStandardMaterial({ color: "#b35f45" })
  );
  roof.position.set(0, 2.5, 0);
  roof.rotation.set(0, Math.PI / 4, 0);
  scene.add(roof);

  const door = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1.5, 2, 0.1),
    new THREE.MeshStandardMaterial({
      map: woodTexture,
      normalMap: woodTextureNormal,
    })
  );
  door.position.set(0, -0.5, 2);
  house.add(door);

  [
    {
      scale: new THREE.Vector3(0.5, 0.5, 0.5),
      pos: new THREE.Vector3(0.8, -0.7, 2.2),
    },
    {
      scale: new THREE.Vector3(0.3, 0.3, 0.3),
      pos: new THREE.Vector3(1.4, -0.8, 2.2),
    },
    {
      scale: new THREE.Vector3(0.5, 0.5, 0.5),
      pos: new THREE.Vector3(-1.2, -0.7, 2.2),
    },
    {
      scale: new THREE.Vector3(0.2, 0.2, 0.2),
      pos: new THREE.Vector3(-1.5, -0.8, 2.7),
    },
  ].forEach(({ scale, pos }) => {
    const bush = new THREE.Mesh(bushG, bushM);
    bush.scale.copy(scale);
    bush.position.copy(pos);
    bush.castShadow = true;
    scene.add(bush);
  });

  const graves = new THREE.Group();
  house.add(graves);

  const fog = new THREE.Fog("#262837", 1, 15);
  scene.fog = fog;

  for (let i = 0; i < 40; i++) {
    const grave = new THREE.Mesh(graveG, graveM);
    const angle = Math.random() * Math.PI * 2;
    const x = Math.sin(angle) * (5 + Math.random() * 4);
    const z = Math.cos(angle) * (5 + Math.random() * 4);
    grave.position.set(x, -1.2, z);
    grave.rotation.y = (0.5 - Math.random()) * 0.4;
    grave.rotation.z = (0.5 - Math.random()) * 0.5;
    grave.castShadow = true;
    graves.add(grave);
  }

  ghosts = [
    new THREE.PointLight("#ff00ff", 2, 3),
    new THREE.PointLight("#00ffff", 2, 3),
    new THREE.PointLight("#ffff00", 2, 3),
  ];

  ghosts.forEach((ghost) => {
    ghost.position.set(Math.random() * 6, 0, Math.random() * 6);
  });

  const ghostBodies = [
    new THREE.PointLightHelper(ghosts[0], 0.03),
    new THREE.PointLightHelper(ghosts[1], 0.03),
    new THREE.PointLightHelper(ghosts[2], 0.03),
  ];

  let i = 0;
  ghosts.forEach((ghost) => {
    ghost.castShadow = true;
    ghost.shadow.mapSize.width = 256;
    ghost.shadow.mapSize.height = 256;
    ghost.shadow.camera.far = 7;

    scene.add(ghost, ghostBodies[i++]);
  });

  animate();
}

const clock = new THREE.Clock();
let call;
function animate() {
  call = requestAnimationFrame(animate);
  controls.update();

  const elapsedTime = clock.getElapsedTime();

  updateGhosts(elapsedTime);

  renderer.render(scene, camera);
}

export function dispose() {
  console.log("lull");
  scene.children.forEach((child) => {
    if (child.type === "Mesh") {
      child.geometry.dispose();
      child.material.dispose();
    }
  });
  scene.children = [];
  cancelAnimationFrame(call);
  renderer.dispose();
}

function updateGhosts(elapsedTime) {
  const ghostlAngle = elapsedTime;
  ghosts[0].position.x = Math.cos(ghostlAngle) * 6;
  ghosts[0].position.z = Math.sin(ghostlAngle) * 6;
  ghosts[0].position.y = Math.sin(elapsedTime * 3);

  const ghost2Angle = -elapsedTime;
  // ghosts[1].position.x = Math.cos(ghost2Angle) * 8;
  ghosts[1].position.z = Math.sin(ghost2Angle) * 8;
  ghosts[1].position.x = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 4);

  const ghost3Angle = -elapsedTime * 1.3;
  ghosts[2].position.x =
    Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32));
  ghosts[2].position.z =
    Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5));
  ghosts[2].position.y = Math.sin(elapsedTime * 5) + Math.sin(elapsedTime * 2);
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
  renderer.setClearColor("#262837");
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.6;
  camera.position.set(4, 1, 8);

  addLights();

  addGround();
}

function addGround() {
  //   let grid = new THREE.GridHelper(20, 10);
  //   grid.position.y = -1;
  //   grid.receiveShadow = true;
  ground = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(20, 20, 10, 10),
    new THREE.MeshStandardMaterial({ map: grassTexture })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1;
  ground.receiveShadow = true;

  scene.add(ground);
}

function addLights() {
  let lights = [];
  lights[0] = new THREE.AmbientLight("#b9d5ff", 0.12);

  lights[1] = new THREE.DirectionalLight("#b9d5ff", 0.12);
  lights[1].position.set(4, 5, -2);

  lights[2] = new THREE.PointLight("#ff7d46", 1, 7);
  lights[2].name = "doorLight";

  lights[2].position.set(0, 1.45, 2.3);

  lights.forEach((light) => {
    light.castShadow = true;
    scene.add(light);
  });
}

// function showWireframes() {
//   scene.children.forEach((child) => {
//     if (child.type === "Mesh") {
//       child.material.wireframe = true;
//     } else if (child.type === "Group") {
//       child.children.forEach((child) => {
//         if (child.type === "Mesh") child.material.wireframe = true;
//       });
//     }
//   });
// }
