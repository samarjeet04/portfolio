import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { VS, FS } from "./flatShaders";
import headerGlsl from "./header.glsl";
import mainGlsl from "./main.glsl";

function build(rad) {
  // return new THREE.SphereGeometry(rad, 200, 200);
  return new THREE.TorusKnotGeometry(rad, 2, 600, 100, 3, 4);
}

class World {
  constructor(parent, bgcolor, primary, secondary) {
    this.lightColors = [primary, secondary];
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      15,
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
    this.time = 0;
    this.controls = new OrbitControls(this.camera, parent);
    this.controls.enableZoom = true;
    this.controls.enableDamping = true;
    this.radius = 0.1;

    const geometry = build(this.radius);
    const material = new THREE.MeshStandardMaterial({
      emissive: new THREE.Color(bgcolor),
      // wireframe: true,
    });

    // material.userData.u_time = { value: Math.random() };
    // material.onBeforeCompile = (shader) => {
    //   shader.uniforms.u_time = material.userData.u_time;
    //   shader.vertexShader = headerGlsl + "\n" + shader.vertexShader;

    //   shader.vertexShader = shader.vertexShader.replace(
    //     `#include <begin_vertex>`,
    //     mainGlsl
    //   );
    // };

    this.sphere = new THREE.Mesh(geometry, material);
    this.sphere.position.set(7, 0, 0);

    this.scene.add(this.sphere);

    this.addLights();
    this.camera.position.set(0, 0, 30);
  }
  animate() {
    this.renderer.setAnimationLoop(() => {
      this.controls.update();
      if (this.time < 3000) this.time += 1;

      if (this.radius < 6) this.radius += 1 / this.time;
      this.sphere.geometry.dispose();
      this.sphere.geometry = build(this.radius);

      this.sphere.rotation.x += 1 / this.time;
      this.sphere.rotation.y += 1 / this.time;
      // this.sphere.material.userData.u_time.value += 0.01;
      // this.sphere.material.uniforms.u_time.value += 0.01;
      this.renderer.render(this.scene, this.camera);
    });
  }
  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  addLights() {
    let lights = [];
    lights[0] = new THREE.SpotLight(new THREE.Color(this.lightColors[0]));
    lights[0].target = this.sphere;
    lights[0].position.set(-10, 10, 0);

    lights[1] = new THREE.SpotLight(new THREE.Color(this.lightColors[1]));
    lights[1].target = this.sphere;
    lights[1].position.set(-10, -10, 0);

    lights.forEach((light) => this.scene.add(light));
  }
}

export default World;
