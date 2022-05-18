// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdUXwciaukFqkratlg86MopKVKPfngWAY",
    authDomain: "todo-app-6518b.firebaseapp.com",
    projectId: "todo-app-6518b",
    storageBucket: "todo-app-6518b.appspot.com",
    messagingSenderId: "22588704775",
    appId: "1:22588704775:web:e437c13779c2801fb782a2",
    measurementId: "G-RS0HK0X6EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;