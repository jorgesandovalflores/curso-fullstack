<script setup lang="ts">
//import Calculator from './components/Calculator.vue';
//import Carousel from './components/Carousel.vue';
//import AreaCuadrado from './components/AreaCuadrado.vue';
import Login from './components/Login.vue';
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!--<HelloWorld msg="Vite + Vue" />-->
  <!--<Calculator />-->
  <!--<Carousel />-->
  <!--<AreaCuadrado />-->
  <Login />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
