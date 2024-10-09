// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPvi4lhsq8mjNm2ne7PDZbgd_IGYQSV0k",
  authDomain: "keepclone-cdb5c.firebaseapp.com",
  projectId: "keepclone-cdb5c",
  storageBucket: "keepclone-cdb5c.appspot.com",
  messagingSenderId: "416625563128",
  appId: "1:416625563128:web:1b3dd77977cb02e632f20d",
  measurementId: "G-6CN2SZ215Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);