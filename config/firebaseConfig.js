// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,  
  authDomain: "collaboration-app-91c08.firebaseapp.com",
  projectId: "collaboration-app-91c08",
  storageBucket: "collaboration-app-91c08.appspot.com",
  messagingSenderId: "268171074899",
  appId: "1:268171074899:web:3654a711486b39be5ed5a6",
  measurementId: "G-S3S5D6ZKQZ" 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
