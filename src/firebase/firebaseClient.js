// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDWHY2YuqgtedMa8rRskeSspyif1kDwZV4",
  authDomain: "cfl-web-react.firebaseapp.com",
  projectId: "cfl-web-react",
  storageBucket: "cfl-web-react.firebasestorage.app",
  messagingSenderId: "26140813952",
  appId: "1:26140813952:web:881a2bc35362884d705465",
  measurementId: "G-QWJP7PMVHH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db =  getFirestore(app);