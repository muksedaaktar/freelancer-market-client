// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIeRtDG2tyoi6Yvx9D9kHu44i7Wy01m8k",
  authDomain: "freelance-market-4cb69.firebaseapp.com",
  projectId: "freelance-market-4cb69",
  storageBucket: "freelance-market-4cb69.firebasestorage.app",
  messagingSenderId: "436392257281",
  appId: "1:436392257281:web:1000f87d1503a6eb56dd00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);