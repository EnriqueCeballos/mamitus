import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0bvYXtsckC8euXbR-6y5a9o6YPvwAAYQ",
  authDomain: "mamituscba.firebaseapp.com",
  projectId: "mamituscba",
  storageBucket: "mamituscba.appspot.com",
  messagingSenderId: "636795036294",
  appId: "1:636795036294:web:e2c1c02edb23b0e53f6707",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
