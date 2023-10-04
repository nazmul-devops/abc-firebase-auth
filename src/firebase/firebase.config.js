// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8gS0LOo6EmfmzmvNTW8xX6W-gn-z0iqU",
    authDomain: "simple-firebase-e0a01.firebaseapp.com",
    projectId: "simple-firebase-e0a01",
    storageBucket: "simple-firebase-e0a01.appspot.com",
    messagingSenderId: "199071909588",
    appId: "1:199071909588:web:ea1d6a057d978024031d41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;