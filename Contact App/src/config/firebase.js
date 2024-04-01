// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Firestore, getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf0GCiaXoD0kttsREtabCN49ulyS5P_c8",
  authDomain: "contact-app-8f93e.firebaseapp.com",
  projectId: "contact-app-8f93e",
  storageBucket: "contact-app-8f93e.appspot.com",
  messagingSenderId: "500662935247",
  appId: "1:500662935247:web:8a09467be08d973635a1ba",
  measurementId: "G-DTY8L4VS1H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);