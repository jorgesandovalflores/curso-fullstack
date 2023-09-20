<script setup lang="ts">
import { ref } from 'vue'
import { useFirebase } from '../store/firebase' 

defineProps<{ msg: string }>()

const count = ref(0)
const model = ref<any>()
const firebase = useFirebase()

const handleFileChange = async (event: any) => {
  const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files && fileInput.files[0];
    if (file) {
      let url = await firebase.callUploadImage(file, 'examen-hoy')
      console.log('url => ', url)
    }
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <div>
    <input type="file" ref="fileInput" @change="handleFileChange" />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
