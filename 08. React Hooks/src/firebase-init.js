// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCbKbDbgl9Qby9qmBuIy7j1d1jA1sC664",
  authDomain: "blog-new-911fc.firebaseapp.com",
  projectId: "blog-new-911fc",
  storageBucket: "blog-new-911fc.appspot.com",
  messagingSenderId: "1062228625402",
  appId: "1:1062228625402:web:82462e5cf2c899a833c643"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);