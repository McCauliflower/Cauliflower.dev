<!-- File: components/Navbar3D.vue -->
<template>
  <div class="navbar-container" :style="backgroundStyle">
    <div class="navbar" ref="navbar">
      <div
        v-for="item in menuItems"
        :key="item.name"
        class="navbar-item"
        @mouseenter="handleMouseEnter(item)"
        @mouseleave="handleMouseLeave"
      >
        <a :href="item.link">{{ item.name }}</a>
      </div>
      <div class="indicator" ref="indicator" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const menuItems = [
  { name: 'Home', link: '/', background: 'url(/images/home-bg.jpg)' },
  { name: 'Art Gallery', link: '/art-gallery', background: 'url(/images/about-bg.jpg)' },
  { name: 'Code Gallery', link: '/code-gallery', background: 'url(/images/services-bg.jpg)' },
  { name: 'Login', link: '/login', background: 'url(/images/contact-bg.jpg)' },
];

const navbar = ref<HTMLElement | null>(null);
const indicator = ref<HTMLElement | null>(null);
const activeBackground = ref<string>('');

const backgroundStyle = computed(() => ({
  backgroundImage: activeBackground.value,
  transition: 'background-image 0.5s ease-in-out',
}));

const handleMouseEnter = (item: { name: string; link: string; background: string }) => {
  const target = event?.currentTarget as HTMLElement;
  if (indicator.value && target) {
    indicator.value.style.left = `${target.offsetLeft}px`;
    indicator.value.style.width = `${target.offsetWidth}px`;
  }
  activeBackground.value = item.background;
};

const handleMouseLeave = () => {
  if (indicator.value && navbar.value) {
    indicator.value.style.left = '0';
    indicator.value.style.width = '0';
  }
  activeBackground.value = '';
};
</script>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
  background-size: cover;
  background-position: center;
}

.navbar {
  display: flex;
  position: relative;
  background: rgba(51, 51, 51, 0.8);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
}

.navbar-item {
  position: relative;
  margin: 0 15px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.navbar-item:hover {
  color: #61dafb;
}

.indicator {
  position: absolute;
  bottom: 0;
  height: 4px;
  background: #61dafb;
  transition: all 0.3s;
  pointer-events: none;
}
</style>