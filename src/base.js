// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app"
import "firebase/compat/auth"


const firebaseConfig = {
  apiKey: "AIzaSyB0nVrsBD7VUBCQZLuflBaqAQQzQyLEDV4",
  authDomain: "motors-regist.firebaseapp.com",
  projectId: "motors-regist",
  storageBucket: "motors-regist.appspot.com",
  messagingSenderId: "130036908248",
  appId: "1:130036908248:web:5c7deb797ead47f34397ad"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;
