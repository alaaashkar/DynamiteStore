// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDij50CHx_TyLG0EkmxvmTRwguNs608YZg",
  authDomain: "dynamite-e40d0.firebaseapp.com",
  projectId: "dynamite-e40d0",
  storageBucket: "dynamite-e40d0.appspot.com",
  messagingSenderId: "379654979319",
  appId: "1:379654979319:web:dceace299dc6c566e21df2",
  measurementId: "G-QS249G6MV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);