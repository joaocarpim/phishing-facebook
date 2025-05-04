// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3R7LnUWlnyEsA-k6pbTZ5Rypn0uGDljo",
  authDomain: "phishing-dashboard-4cee3.firebaseapp.com",
  projectId: "phishing-dashboard-4cee3",
  storageBucket: "phishing-dashboard-4cee3.firebasestorage.app",
  messagingSenderId: "77205391284",
  appId: "1:77205391284:web:6f739c3dbdeaa432b2d4e1",
  measurementId: "G-GVRRK97PNC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


