<template>
  <header>
    <div class="nav-wrapper">
      <img id="cauliflower-logo"
           src="public/CauliflowerSMALL.png"
           height="auto"
           alt="Icon"
           hre="/"
      </img>
      <nav id="cssmenu">
        <ul>
          <li class="active">
            <NuxtLink id="one" to="/art">Art</NuxtLink>
          </li>
          <li>
            <NuxtLink id="two" to="/code">Code</NuxtLink>
          </li>
          <li>
            <NuxtLink id="three" to="/login">Login</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
</script>

<style scoped>
@import url(assets/styles/reset.css);
@import url(assets/styles/global.css);

.nav-wrapper {
  position: fixed;
  width: 100%;
  padding: 0 20px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 60px;
  box-sizing: border-box;
  padding: 0;
}
#cauliflower-logo {
  filter: brightness(1) contrast(1) opacity(0.8) invert(0) sepia(0.5) saturate(.6) hue-rotate(0deg);
  position: relative;
  height: 40px;
  width: 40px;
  padding-top: 7px;
  cursor: pointer;
  transition: all .5s;
}
#cauliflower-logo:hover {
  filter: opacity(1) sepia(0);
}

#cssmenu {
  z-index: 2;
  position: fixed;
  top: 0;
  left: calc(50% - 200px);
  width: 100%;
}

#cssmenu > ul {
  background: white;
}

#cssmenu ul li {
  min-width: 120px;
  margin: 0 auto;
}

#cssmenu ul, #cssmenu ul li, #cssmenu ul li a {
  text-align: center;
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  display: block;
  box-sizing: border-box;
}

#cssmenu > ul > li {
  float: left;
  perspective: 1000px;
}

#cssmenu > ul > li > a {
  padding: 16px 20px;
  font-size: 12pt;
  color: #8C8479;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  background: white;
  transition: all .3s;
  transform-origin: 50% 0;
  transform-style: preserve-3d;
}

#cssmenu>ul>li:hover>a,
#cssmenu>ul>li>a:hover {
  color: #8C8479;
  background-color: #d6d6d6;
  transform: rotateX(90deg) translateY(-23px);
  position: relative;
}

#cssmenu>ul>li>a::before {
  position: absolute;
  top: 100%;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 16px 20px;
  color: #8C8479;
  background: #781e32;
  content: attr(data-title);
  transition: background .2s;
  transform: rotateX(-90deg);
  transform-origin: 50% 0;
}

#cssmenu>ul>li>a::before {
  background-color: white;
}

#cssmenu>ul>li>a[id="one"]::before {
  content: "ART";
}
#cssmenu>ul>li>a[id="two"]::before {
  content: "CODE";
}
#cssmenu>ul>li>a[id="three"]::before {
  content: "LOGIN";
}

#cssmenu > ul > li:hover > a,
#cssmenu > ul > li > a:hover {
  color: #8C8479;
  background-color: #d6d6d6;
  transform: rotateX(90deg) translateY(-23px);
}

/* ... other necessary styles like for small screens, dropdowns etc. */
</style>