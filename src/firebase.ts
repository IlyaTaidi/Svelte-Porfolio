// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz6fuct9FxXso93MPGnTmXUitWfpWKTcg",
  authDomain: "svelteportfolio-bfe0d.firebaseapp.com",
  projectId: "svelteportfolio-bfe0d",
  storageBucket: "svelteportfolio-bfe0d.appspot.com",
  messagingSenderId: "283055177781",
  appId: "1:283055177781:web:99eacabf30de2d4d75b17c",
  measurementId: "G-KYGM4754GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);