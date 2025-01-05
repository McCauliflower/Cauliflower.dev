<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { useExampleStore } from '@/store'

const store = useExampleStore()
const { count, increment } = store
</script>
