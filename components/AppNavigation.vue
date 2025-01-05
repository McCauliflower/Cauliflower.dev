<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/art">About</NuxtLink></li>
      <li><NuxtLink to="/code">Users</NuxtLink></li>
      <li><NuxtLink to="/login">Login</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

li {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>