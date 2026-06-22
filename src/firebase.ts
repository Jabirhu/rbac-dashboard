import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOKk-aNd7zd9J-im5Oa3E7rzZvhHAC9Js",
  authDomain: "rbac-dashboard-dc7bf.firebaseapp.com",
  projectId: "rbac-dashboard-dc7bf",
  storageBucket: "rbac-dashboard-dc7bf.firebasestorage.app",
  messagingSenderId: "311477990600",
  appId: "1:311477990600:web:bb6bc717b69efe0a23a1fd",
  measurementId: "G-CM2ET1ZPQY"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);