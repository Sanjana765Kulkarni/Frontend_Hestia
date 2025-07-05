// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBtRo5rKlyjOeOlOz6Yja7CH6fx87zW4dU",
    authDomain: "hestia-3786d.firebaseapp.com",
    projectId: "hestia-3786d",
    storageBucket: "hestia-3786d.firebasestorage.app",
    messagingSenderId: "277288851378",
    appId: "1:277288851378:web:ed680cca8e6357e18ef6ab",
    measurementId: "G-YRHMBBGWB4"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);