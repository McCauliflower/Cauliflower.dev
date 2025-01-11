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
    const sceneContainer = ref<HTMLElement | null>(null);

   function getBox(w: number, h: number, d: number) {
      const geometry = new THREE.BoxGeometry(w, h, d);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const mesh = new THREE.Mesh(geometry, material);
      return mesh;
   };

    onMounted(() => {
      if (sceneContainer.value) {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        sceneContainer.value.appendChild(renderer.domElement);

        // Add a simple cube
        const mesh = getBox(1, 1, 1);
        
        scene.add(mesh);

        camera.position.z = 5;

        // Animation loop
        function animate() {
          requestAnimationFrame(animate);
          mesh.rotation.x += 0.01;
          mesh.rotation.y += 0.01;
          renderer.render(scene, camera);
        }
        
        animate();
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