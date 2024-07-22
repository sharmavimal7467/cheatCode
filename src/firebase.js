// Import the functions you need from the SDKs you need
import "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

import {getAuth , GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgJ4NpaQeLLLV8iJGp3U1MWYI0xbPNo70",
  authDomain: "cheatcode-2b932.firebaseapp.com",
  projectId: "cheatcode-2b932",
  storageBucket: "cheatcode-2b932.appspot.com",
  messagingSenderId: "521231589961",
  appId: "1:521231589961:web:7dd1c79041c6615c3ad598"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth , provider};
export default db;