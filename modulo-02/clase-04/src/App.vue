<script setup lang="ts">
import { onUpdated, ref } from 'vue';
import ComunicacionView from './components/ComunicacionView.vue';
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onErrorCaptured, onMounted } from 'vue';

const userName = ref<string>('')
const userAge = ref<number>(0)
const valueChild = ref<number>(0)

const clickEvent = (value: number) => {
  valueChild.value = value
}

    onBeforeMount(() => {
        console.log('father onBeforeMount')
    })

    onBeforeUpdate(() => {
        console.log('father onBeforeUpdate')
    })

    onBeforeUnmount(() => {
        console.log('father onBeforeUnmount')
    })

    onErrorCaptured(() => {
        console.log('father onErrorCaptured')
    })

    onMounted(() => {
        console.log('father onMounted')
    })

    onUpdated(() => {
      console.log('father onUpdated')
    })
</script>

<template>
  <!--
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  -->

  <!--
  <Suspense>
      <template #default>
        <SuspenseView />
      </template>
      <template #fallback>
        <div>Cargando...</div>
      </template>
  </Suspense>
  -->

  <ComunicacionView :name="userName" :age="userAge" @click="clickEvent">
    <input type="text" v-model="userName" />
    <input type="number" v-model="userAge" />
    <h2> {{ valueChild }}</h2>
  </ComunicacionView>

  <!--
  <SlotView >
    <p>Este es el contenido que se pasa al componente hijo.</p>
  </SlotView>
  -->

  <CicloVida />
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
