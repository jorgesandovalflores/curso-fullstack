<script setup lang="ts">
    import { onMounted, ref } from 'vue';

    const message = ref('Cargando...')

    onMounted(() => {
        setTimeout(() => {
            message.value = '¡Componente cargado!';
        }, 2000)
    })
</script>

<template>
    <div>
        <h2>Componente Asíncrono</h2>
        <p>{{ message }}</p>
    </div>
</template>

<style>
</style>