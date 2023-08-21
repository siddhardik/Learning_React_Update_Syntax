// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore}  from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQHeqox1q0bCFSAoD0NsH-FHr8SaWdBlE",
  authDomain: "blogging-app-2541f.firebaseapp.com",
  projectId: "blogging-app-2541f",
  storageBucket: "blogging-app-2541f.appspot.com",
  messagingSenderId: "428546581995",
  appId: "1:428546581995:web:cf07c4a91cb5342dfae5ae",
  measurementId: "G-Z8VTX041HR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const dp= getFirestore(app);