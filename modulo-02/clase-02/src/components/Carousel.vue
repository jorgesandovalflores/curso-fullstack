<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    const images = ref<string[]>([
      'https://picsum.photos/seed/dQysEN/640/480',
      'https://picsum.photos/seed/wuBa7MA2y/640/480'
    ])
    const currentIndex = ref<number>(0)
  
    onMounted(() => {
        setInterval(showNextImage, 3000);
    })
  
    const showNextImage = () => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length;
    }
</script>

<template>
    <div class="carousel-container">
      <div class="carousel">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :class="{ 'active': index === currentIndex }"
          alt="Carousel Image"
        />
      </div>
    </div>
</template>

<style scoped>
  .carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .carousel {
    display: flex;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .carousel img {
    max-width: 100%;
    height: auto;
    opacity: 0;
    transition: opacity 0.5s;
  }
  
  .carousel img.active {
    opacity: 1;
  }
</style>
  