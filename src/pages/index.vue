<template>
  <div>
    <h1>Welcome to My Nuxt 3 App</h1>
    <p>{{ rootStore.message }}</p>
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script setup lang="ts">
import { piniaRootStore } from '@/store/index';

const rootStore = piniaRootStore();

function updateMessage() {
  rootStore.updateMessage('Message updated!');
}
</script>