// config/firebase_config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, setDoc, updateDoc, deleteDoc, getDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

export const firebaseConfig = {
   apiKey: "AIzaSyDS-5Y9m7ngxNciBKwcDEWyHDKgxqFVcnM",
   authDomain: "database-practice-39e1f.firebaseapp.com",
   databaseURL: "https://database-practice-39e1f-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "database-practice-39e1f",
   storageBucket: "database-practice-39e1f.firebasestorage.app",
   messagingSenderId: "603193773523",
   appId: "1:603193773523:web:69fca049b15031760cf326"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
export const auth = getAuth(app);

// Sirf 1 baar export - sab kuch isi me hai
export { collection, getDocs, doc, setDoc, updateDoc, deleteDoc, getDoc, serverTimestamp, ref, get };