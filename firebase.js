// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDoc, 
    getDocs, 
    doc, 
    setDoc, 
    updateDoc, 
    onSnapshot, 
    query 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAAG2bHKBAYBwoHr1m5RKMpI9HARx0TcWA",
    authDomain: "cms01-d8400.firebaseapp.com",
    databaseURL: "https://cms01-d8400-default-rtdb.firebaseio.com",
    projectId: "cms01-d8400",
    storageBucket: "cms01-d8400.firebasestorage.app",
    messagingSenderId: "761545517220",
    appId: "1:761545517220:web:3a16347bc0bfd2a3e35e31",
    measurementId: "G-W6KWVF3DBD"
  };

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore instance
const auth = getAuth(app);

// Export everything needed by other files
export { 
    db, 
    auth, 
    collection, 
    addDoc, 
    getDoc, 
    getDocs, 
    doc, 
    setDoc, 
    updateDoc, 
    onSnapshot, 
    query,
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
};