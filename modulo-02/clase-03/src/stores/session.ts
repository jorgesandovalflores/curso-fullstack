import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { computed } from 'vue'

export const useSession = defineStore('session', () => {
    
    const token = useStorage('token', '')
    const isLoggedIn = computed(() => token.value != undefined && token.value != '')

    return {
        isLoggedIn
    } as const
})