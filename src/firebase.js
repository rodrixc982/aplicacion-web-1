// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwl7jGkB9MCxxW3tivzTdUNSw_a7l_1qA",
  authDomain: "aplicacion-web-profesor1.firebaseapp.com",
  projectId: "aplicacion-web-profesor1",
  storageBucket: "aplicacion-web-profesor1.appspot.com",
  messagingSenderId: "851657203384",
  appId: "1:851657203384:web:36bbfdfafee43b46611e4d",
  measurementId: "G-XK70YE1BX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}
export default app;