// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpLyQrIAZZyyHkJpN1cLK0_5hgtI3WWXs",
  authDomain: "ema-john-with-firebase-a-da199.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-da199",
  storageBucket: "ema-john-with-firebase-a-da199.appspot.com",
  messagingSenderId: "929994717175",
  appId: "1:929994717175:web:1bb5ade77587dc6f0a60f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;