import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCoMirjUy4o0--CeUSf8mBP2P9talk-k38",
   authDomain: "house-marketplace-467fa.firebaseapp.com",
   projectId: "house-marketplace-467fa",
   storageBucket: "house-marketplace-467fa.appspot.com",
   messagingSenderId: "57755006450",
   appId: "1:57755006450:web:fd0a40c0bfcf5d3225a76b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()