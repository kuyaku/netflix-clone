// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcUGnrCmINBfls5AblZYJk5jSRpnAyS2g",
  authDomain: "mynetflixgpt-21046.firebaseapp.com",
  projectId: "mynetflixgpt-21046",
  storageBucket: "mynetflixgpt-21046.appspot.com",
  messagingSenderId: "719959729499",
  appId: "1:719959729499:web:78998f94525ad85632267e",
  measurementId: "G-262G0CFPE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
