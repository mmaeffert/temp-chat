// Import the functions you need from the SDKs you need
import {firebase, initializeApp} from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firease products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8rGU84mslUT5ZRHi7EW5OvS4fZQF5sAE",
  authDomain: "secretchat-4b798.firebaseapp.com",
  databaseURL: "https://secretchat-4b798-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "secretchat-4b798",
  storageBucket: "secretchat-4b798.appspot.com",
  messagingSenderId: "939087262880",
  appId: "1:939087262880:web:74003625280bd22bb605c5",
  databaseURL: "https://secretchat-4b798-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app.databaseURL);

// Initialize Realtime Database and get a reference to the service
const myDatabase = firebase;
