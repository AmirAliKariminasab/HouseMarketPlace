// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firestore, getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJQBCfdoPL5r42FFV9isSD2zw3tzLF-9U",
  authDomain: "house-marketplace-app-fbc5f.firebaseapp.com",
  projectId: "house-marketplace-app-fbc5f",
  storageBucket: "house-marketplace-app-fbc5f.appspot.com",
  messagingSenderId: "706303071125",
  appId: "1:706303071125:web:64e2406b9c286cd6701c9c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore(); 