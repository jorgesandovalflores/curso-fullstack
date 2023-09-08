import { initializeApp, FirebaseApp } from 'firebase/app'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import jsonLocal from '../../firebase.json'

export class UseFirebase {

    firebaseApp: FirebaseApp

    constructor() {
        this.firebaseApp = initializeApp(jsonLocal)
    }

    public uploadImage(file: File, path: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const fileName = Math.random().toString(36).slice(2)
            const storage = getStorage(this.firebaseApp, String(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET))
            const storageRef = ref(storage, `${path}/${fileName}.jpg`)
            const metadata = {contentType: 'image/jpeg'}
            const uploadTask = uploadBytesResumable(storageRef, file, metadata)
            
            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed', (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                switch (snapshot.state) {
                    case 'paused':
                    break;
                    case 'running':
                    break;
                }
            }, (exception) => {
                // Handle unsuccessful uploads
                console.log('exception => ', exception)
                reject(exception)
            }, () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL)
                });
            })
        })
    }

}