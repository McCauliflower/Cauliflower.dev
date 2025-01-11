<template>
    <div>
      <app-nav />
      <div id="art-gallery">
        <h1>Art Gallery Page</h1>
        <p>Welcome to the art section.</p>
        <NuxtLink to="/code-gallery">Go to Code</NuxtLink>
      </div>
    </div>
</template>


<script setup lang="ts">

</script>
<style scope type="css">
#art-gallery {
  padding:100px;
  margin: 0;
  top: 0;
}
</style>