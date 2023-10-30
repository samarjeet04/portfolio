import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import headerGlsl from "./header.glsl";
import mainGlsl from "./main.glsl";
import {metalMap} from "../../../images";

const tl = new THREE.TextureLoader();
const metal = tl.load(metalMap);

function build(radius, geometry) {
  const g = new THREE.TorusKnotBufferGeometry(radius, 1, 500, 100, 3, 4);
  const material = new THREE.MeshMatcapMaterial({ matcap: metal });
  // material.userData.u_time = { value: Math.random() };
  // material.onBeforeCompile = (shader) => {
  //   shader.uniforms.u_time = material.userData.u_time;
  //   shader.vertexShader = headerGlsl + "\n" + shader.vertexShader;

  //   shader.vertexShader = shader.vertexShader.replace(
  //     `#include <begin_vertex>`,
  //     mainGlsl
  //   );
  // };
  if (geometry) {
    return g;
  }
  return new THREE.Mesh(g, material);
}

class World {
  constructor(parent, bgcolor, lightColor) {
    this.lightsColor = lightColor;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      // 30,
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({
      canvas: parent,
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, parent.offsetHeight);
    this.controls = new OrbitControls(this.camera, parent);
    this.controls.enableZoom = false;
    this.controls.enableDamping = true;
    this.time = 0;
    this.radius = 0.1;
    // const geometry = new THREE.IcosahedronGeometry(this.radius, 5);
    // const material = new THREE.MeshPhongMaterial({
    //   emissive: new THREE.Color(bgcolor),
    //   wireframe: true,
    // });

    // material.userData.u_time = { value: Math.random() };
    // material.onBeforeCompile = (shader) => {
    //   shader.uniforms.u_time = material.userData.u_time;
    //   shader.vertexShader = headerGlsl + "\n" + shader.vertexShader;

    //   shader.vertexShader = shader.vertexShader.replace(
    //     `#include <begin_vertex>`,
    //     mainGlsl
    //   );
    // };

    this.sphere = build(this.radius);
    this.sphere.position.x = 6;

    this.scene.add(this.sphere);

    this.addLights();
    this.camera.position.set(0, 0, 10);
  }
  animate() {
    this.renderer.setAnimationLoop(() => {
      this.controls.update();
      if (this.time < 3000) this.time += 1;

      if (this.radius < 6) this.radius += 1 / this.time;
      this.sphere.geometry.dispose();
      this.sphere.geometry = build(this.radius, true);

      this.sphere.rotation.x += 1 / this.time;
      this.sphere.rotation.y += 1 / this.time;
      // this.sphere.material.userData.u_time.value += 0.01;
      this.renderer.render(this.scene, this.camera);
    });
  }
  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  addLights() {
    // let lights = [];
    // lights[0] = new THREE.SpotLight(new THREE.Color(this.lightsColor));
    // lights[0].target = this.sphere;
    // lights[0].position.set(-3, 0, 0);
    // lights.forEach((light) => this.scene.add(light));
    const width = 10;
    const height = 5;
    const intensity = 2;
    const rectLight = new THREE.RectAreaLight(
      0xff00ff,
      intensity,
      width,
      height
    );
    rectLight.position.set(12, 0, -8);
    rectLight.lookAt(6, 0, 0);
    this.scene.add(rectLight);

    // const rectLightHelper = new RectAreaLightHelper(rectLight);
    // rectLight.add(rectLightHelper);
  }
  dispose() {
    this.scene.children.forEach((child) => {
      if (child.type === "Mesh") {
        child.geometry.dispose();
        child.material.dispose();
      }
    });
    this.scene.children = [];
    this.renderer.dispose();
    // console.log(this.scene.children);
  }
}

export default World;
