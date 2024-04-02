// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ef6b9.firebaseapp.com",
  projectId: "mern-estate-ef6b9",
  storageBucket: "mern-estate-ef6b9.appspot.com",
  messagingSenderId: "289326729884",
  appId: "1:289326729884:web:c33a1f31c7f29f4dfabb59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);