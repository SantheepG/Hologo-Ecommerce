// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvDknGVfXRLEltSPscYYk1P1JxpGheffA",
  authDomain: "dashboard-react-db5ef.firebaseapp.com",
  projectId: "dashboard-react-db5ef",
  storageBucket: "dashboard-react-db5ef.appspot.com",
  messagingSenderId: "761024854923",
  appId: "1:761024854923:web:3cb43c14571024fd11cd8e",
  measurementId: "G-XEZF580Y5B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
