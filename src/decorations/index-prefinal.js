import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { VS, FS } from "./flatShaders";

function build(rad) {
  // return new THREE.SphereGeometry(rad, 200, 200);
  return new THREE.TorusKnotGeometry(rad, 2, 600, 100, 2, 3);
}

class World {
  constructor(parent, bgcolor, lightColor) {
    this.lightsColor = lightColor;
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
    this.controls.enableZoom = false;
    this.controls.enableDamping = true;
    this.radius = 0.1;

    const geometry = build(this.radius);
    // const material = new THREE.MeshPhongMaterial({
    //   emissive: new THREE.Color(bgcolor),
    //   wireframe: true,
    // });
    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: {
          value: 0.0,
        },
      },
      vertexShader: VS,
      fragmentShader: FS,
      side: THREE.DoubleSide,
      // wireframe: true,
    });

    this.sphere = new THREE.Mesh(geometry, material);
    this.sphere.position.set(7, 0, 0);

    this.scene.add(this.sphere);

    this.addLights();
    this.camera.position.set(0, 0, 40);
  }
  animate() {
    this.renderer.setAnimationLoop(() => {
      this.controls.update();
      if (this.time < 300) this.time += 1;

      if (this.radius < 6) this.radius += 1 / this.time;
      this.sphere.geometry.dispose();
      this.sphere.geometry = build(this.radius);

      this.sphere.rotation.x += 1 / this.time;
      this.sphere.rotation.y += 1 / this.time;
      this.sphere.material.uniforms.u_time.value += 0.01;
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
    lights[0] = new THREE.SpotLight(new THREE.Color(this.lightsColor));
    lights[0].target = this.sphere;
    lights[0].position.set(-1, 0, 0);

    lights.forEach((light) => this.scene.add(light));
  }
}

export default World;
