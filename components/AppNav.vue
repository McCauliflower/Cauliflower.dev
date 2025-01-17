<template>
  <header style="display:none">
    <div class="nav-wrapper">
      <NuxtLink to="/">
        <img id="cauliflower-logo"
             src="public/CauliflowerSMALL.png"
             height="auto"
             alt="Icon"
        />
      </NuxtLink>
      <nav id="cssmenu">
        <ul>
          <li class="active">
            <NuxtLink id="one" to="/art-gallery">Art</NuxtLink>
          </li>
          <li>
            <NuxtLink id="two" to="/code-gallery">Code</NuxtLink>
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
@import url(assets/styles/global.css);
nav-wrapper {
  position: fixed;
  width: 100%;
  padding: 0 20px;
  background-color: #f8f8f8;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
  height: 60px;
  box-sizing: border-box;
  padding: 0;
  font-family: 'AgaveBold', sans-serif;
  box-shadow: 0 3px 3px rgba(150, 150, 150, 0.5);

  #cauliflower-logo {
    filter: brightness(1) contrast(1) opacity(0.8) invert(0) sepia(0.5) saturate(.6) hue-rotate(0deg);
    position: relative;
    height: 40px;
    width: 40px;
    padding: 7px 0 0 10px;
    cursor: pointer;
    transition: all .5s;

    &:hover {
      filter: opacity(1) sepia(0);
    }
  }
}

#cssmenu {
  z-index: 2;
  position: fixed;
  top: 0;
  left: calc(50% - 200px);
  width: 100%;

  > ul {
    background: white;

    li {
      min-width: 120px;
      margin: 0 auto;
      background: #f8f8f8;
      border-color: unset;

      &, a {
        text-align: center;
        margin: 0;
        padding: 0;
        border: 0;
        list-style: none;
        display: block;
      }

      > a {
        padding: 16px 20px;
        font-size: 14pt;
        color: #8C8479;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        text-decoration: none;
        transition: all .5s;
        transform-origin: 50% 0;
        transform-style: preserve-3d;
        height: 28px;

        &:hover, &:focus {
          background-color: darkgray;
          transform: rotateX(90deg) translateY(-20px);
          position: relative;
          font-size: 12pt;
          height: 27px;
        }

        &::before {
          position: fixed;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          color: white;
          padding-top: 15px;
          background: #d6d6d6;
          content: attr(data-title);
          transition: background .2s;
          transform: rotateX(-90deg);
          transform-origin: 50% 0;
        }

        &[id="one"]::before {
          content: "ART";
        }

        &[id="two"]::before {
          content: "CODE";
        }

        &[id="three"]::before {
          content: "LOGIN";
        }
      }
    }
  }
}
</style>