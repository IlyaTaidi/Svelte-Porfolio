import { initializeApp, FirebaseApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCm3Etz1oqSTDfFnwmqxvE5KvEUzL-6G9s",
  authDomain: "playground-jps.firebaseapp.com",
  projectId: "playground-jps",
  storageBucket: "playground-jps.appspot.com",
  messagingSenderId: "854665995034",
  appId: "1:854665995034:web:c63595af8bfed3879502a3",
  measurementId: "G-91T1K5PN08"
};

export class FirebaseContext {
  app: FirebaseApp;

  constructor() {
    this.app = initializeApp(firebaseConfig);
  }
}