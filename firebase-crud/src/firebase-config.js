// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPmZWwgewvQ-LEkAZK47pOGXfRdkYCsX8",
  authDomain: "fir-crud-bcf42.firebaseapp.com",
  projectId: "fir-crud-bcf42",
  storageBucket: "fir-crud-bcf42.appspot.com",
  messagingSenderId: "929232316836",
  appId: "1:929232316836:web:38bb68488cc5fa5eaaf931",
  measurementId: "G-DRNCP9NCVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);