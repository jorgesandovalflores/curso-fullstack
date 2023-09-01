<script setup lang="ts">
    import { computed, ref } from 'vue'
    const sideLength = ref<number>(2)

    const areaComputed = computed(() => sideLength.value * sideLength.value)
</script>
  
<template>
    <div>
      <h2>Calculadora de Área de Cuadrado</h2>
      <label for="sideLength">Lado del cuadrado:</label>
      <input v-model="sideLength" type="number" id="sideLength" />
      <p >El área del cuadrado es: {{ areaComputed }}</p>
    </div>
</template>

<style>
  
</style>
  