// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2BDed8_gicDPAULtrr0-sju3LQFL_W-g",

  authDomain: "erural-teste.firebaseapp.com",

  projectId: "erural-teste",

  storageBucket: "erural-teste.appspot.com",

  messagingSenderId: "532465887569",

  appId: "1:532465887569:web:fc467b51e98002e7150b70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
