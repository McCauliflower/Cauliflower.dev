<template>
  <div>
    <p>Welcome to the Users page!</p>
    <h1>User ID: {{ id }}</h1>
    <!-- Example link to a specific user -->
    <nuxt-link :to="`/users/444`">Go to User 444</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>
