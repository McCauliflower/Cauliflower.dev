<template>
    <div>
        <app-nav />
        <div id="code-gallery">
            <h1>Code Gallery Page</h1>
            <p>Welcome to the code section.</p>
            <NuxtLink to="/art-gallery">Go to Art</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
// 
</script>

<style scope type="css"> 
#code-gallery {
  padding:100px;
  margin: 0;
  top: 0;
}
</style>