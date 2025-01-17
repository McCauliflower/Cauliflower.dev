<template>
  <div>
    <app-nav />
    <div ref="sceneContainer" class="scene-container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import * as THREE from 'three';

export default defineComponent({
  name: 'IndexPage',

  setup() {
    function getBox(w: number, h: number, d: number) {
        const geometry = new THREE.BoxGeometry(w, h, d);
        const material = getMaterial('phong', 'white')
        const box = new THREE.Mesh(geometry, material);
        return box;
    };

    function getPlane(size) {
      const geometry = new THREE.PlaneGeometry(size, size);
      const material = new THREE.MeshLambertMaterial({
        color: 'lightblue',
        side: THREE.DoubleSide,
        metalness: 10, // Initial metalness
      });
      const mesh = new THREE.Mesh(
        geometry,
        material 
      );
      mesh.receiveShadow = true;

      return mesh;
    }

    function getTorus(){
      const geometry = new THREE.TorusGeometry( 2, 0.4, 12, 48 ); 
      const material = getMaterial('standard', 'silver')
      const torus = new THREE.Mesh( geometry, material );
      return torus
    }

    function getSphere(size) {
      const geometry = new THREE.SphereGeometry(size, 24, 24);
      const material = getMaterial('lambert', 'white')
      const mesh = new THREE.Mesh(
        geometry,
        material 
      );

      return mesh;
    }

    function getPointLight(intensity) {
      const light = new THREE.PointLight(0xffffff, intensity);
      light.castShadow = true;

      return light;
    }

    function getSpotLight(intensity) {
      const light = new THREE.SpotLight(0xffffff, intensity);
      light.castShadow = true;

      light.shadow.bias = 0.001;
      light.shadow.mapSize.width = 2048;
      light.shadow.mapSize.height = 2048;

      return light;
    }

    function getDirectionalLight(intensity) {
      const light = new THREE.DirectionalLight(0xffffff, intensity);
      light.castShadow = true;

      light.shadow.camera.left = -10;
      light.shadow.camera.bottom = -10;
      light.shadow.camera.right = 10;
      light.shadow.camera.top = 10;

      return light;
    }

    function getAmbientLight(intensity) {
      const light = new THREE.AmbientLight('rgb(10, 30, 50)', intensity);

      return light;
    }

    function getMaterial(type, color) {
      let selectedMaterial;
      let materialOptions = {
        color: color === undefined ? 'rgb(255, 255, 255)' : color,
      };

      switch (type) {
        case 'basic':
          selectedMaterial = new THREE.MeshBasicMaterial(materialOptions);
          break;
        case 'lambert':
          selectedMaterial = new THREE.MeshLambertMaterial(materialOptions);
          break;
        case 'phong':
          selectedMaterial = new THREE.MeshPhongMaterial(materialOptions);
          break;
        case 'standard':
          selectedMaterial = new THREE.MeshStandardMaterial(materialOptions);
          break;
        default: 
          selectedMaterial = new THREE.MeshBasicMaterial(materialOptions);
          break;
      }

      return selectedMaterial;
    }


    const sceneContainer = ref<HTMLElement | null>(null);

    function init() {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      sceneContainer.value.appendChild(renderer.domElement);

      // Add a simple cube
      const box = getBox(1, 1, 1);
      const torus = getTorus();
      const plane = getPlane(30);
      plane.name = 'plane-1';

      box.position.z = -0.4;
      plane.rotation.x = Math.PI/2;
      plane.position.y = 0;

      plane.add(box);
	    scene.add(plane);
      scene.add(torus);
    
      let enableFog = false;

      if(enableFog) scene.fog = new THREE.FogExp2(0xffffff, 0.2);

      camera.position.x = 1;
      camera.position.y = 2;
      camera.position.z = 5;
      camera.lookAt(new THREE.Vector3(0,0,0))

      // Add a light source
      const light = getDirectionalLight(1)
      scene.add(light);

      // Animation loop
      function animate() {
        requestAnimationFrame(animate);
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;
        plane.rotation.z += 0.001;
        renderer.render(scene, camera);
        renderer.setClearColor('grey');
      }
      
      animate();
      return scene;
    };

    onMounted(() => {
      if (sceneContainer.value) {
        let scene = init();
        window.scene = scene;
        const plane = scene.getObjectByName('plane-1');
      }
    });

    return { sceneContainer };
  }
});
</script>

<style>
.scene-container {
  width: 100vw;
  height: 100vh;
}
</style>