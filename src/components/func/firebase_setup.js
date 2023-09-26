// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "myapp-d87de.firebaseapp.com",
  projectId: "myapp-d87de",
  storageBucket: "myapp-d87de.appspot.com",
  messagingSenderId: "101658274836",
  appId: "1:101658274836:web:364eb204ab277197d30b01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;