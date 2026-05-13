import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue, get } from 'firebase/database'
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCURGY4A39mOZCNGVvh3h-mJEFOV45oP6E',
  authDomain: 'monitor-tangkam.firebaseapp.com',
  databaseURL: 'https://monitor-tangkam-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'monitor-tangkam',
  storageBucket: 'monitor-tangkam.appspot.com',
  messagingSenderId: '914365368721',
  appId: '1:914365368721:web:47d7af4b0b26ca5328b230',
  measurementId: 'G-XPNVDH284S',
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export { database, ref, onValue, get, auth, googleProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged }
export default app
