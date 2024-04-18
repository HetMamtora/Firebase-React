// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA08bHrCIbQp4mr3GqtN8esBzdv1-JF4Js",
  authDomain: "react-firebase-bdf8f.firebaseapp.com",
  projectId: "react-firebase-bdf8f",
  storageBucket: "react-firebase-bdf8f.appspot.com",
  messagingSenderId: "743509644658",
  appId: "1:743509644658:web:0a93eed7efc920bb4f39eb",
  measurementId: "G-7XKN5SJ0J4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);