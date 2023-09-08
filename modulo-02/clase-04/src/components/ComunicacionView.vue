<script setup lang="ts">
    import { ref } from 'vue';
    import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onErrorCaptured, onMounted, onUpdated } from 'vue';

    const count = ref(0)
    const props = withDefaults(
        defineProps<{
            name: string
            age: number
        }>(),
        {
            name: () => 'Nombre por defecto',
            age: () => 18,
        }
    )

    const emits = defineEmits<{
        (e: 'click', count: number): void
    }>()

    const clickEvent = () => {
        count.value++
        emits('click', count.value)
    }

    onBeforeMount(() => {
        console.log('child onBeforeMount')
    })

    onBeforeUpdate(() => {
        console.log('child onBeforeUpdate')
    })

    onBeforeUnmount(() => {
        console.log('child onBeforeUnmount')
    })

    onErrorCaptured(() => {
        console.log('child onErrorCaptured')
    })

    onMounted(() => {
        console.log('child onMounted')
    })

    onUpdated(() => {
      console.log('child onUpdated')
    })
</script>

<template>
    <div>
        <h2 id="title">Datos del usuario</h2>
        <p>Nombre: {{ props.name }}</p>
        <p>Edad: {{ props.age }}</p>
        <button @click="clickEvent">Evento click</button>
    </div>
    <slot></slot>
</template>

<style>
</style>