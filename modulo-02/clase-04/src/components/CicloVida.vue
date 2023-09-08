<script setup lang="ts">
    import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onErrorCaptured, onMounted } from 'vue';

    onBeforeMount(() => {
        console.log('onBeforeMount')
    })

    onBeforeUpdate(() => {
        console.log('onBeforeUpdate')
    })

    onBeforeUnmount(() => {
        console.log('onBeforeUnmount')
    })

    onErrorCaptured(() => {
        console.log('onErrorCaptured')
    })

    onMounted(() => {
        console.log('onMounted')
    })
</script>

<template>
    <div>
        <h2>ciclo de vida</h2>
    </div>
</template>

<style>
</style>