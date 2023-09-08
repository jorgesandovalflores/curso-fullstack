import { defineStore } from 'pinia'
import { UseFirebase } from '../composable/UseFirebase'

export const useFirebase = defineStore('firebase', () => {

    async function callUploadImage(file: File, path: string): Promise<string> {
        try {
            const firebase = new UseFirebase()
            return await firebase.uploadImage(file, path)
        } catch (exception) {
            return ''
        }
    }


    return {
        callUploadImage
    } as const
})