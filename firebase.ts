// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9GX0dXX6UHwSQnceOROhVVU3LEBnTQls",
  authDomain: "netflix-clone-753cb.firebaseapp.com",
  projectId: "netflix-clone-753cb",
  storageBucket: "netflix-clone-753cb.appspot.com",
  messagingSenderId: "772370990250",
  appId: "1:772370990250:web:16bf7d4d71f3a36788bcd3",
  measurementId: "G-MLJ7MMG2Z3",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
