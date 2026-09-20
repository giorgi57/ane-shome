import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAzl1n043F7-uFk8xfLifDvj75z1INsuLM",
    authDomain: "ane-s-home.firebaseapp.com",
    projectId: "ane-s-home",
    storageBucket: "ane-s-home.firebasestorage.app",
    messagingSenderId: "484380648627",
    appId: "1:484380648627:web:6e60a13212c65e02fdfcc6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, onAuthStateChanged, signOut, collection, addDoc, getDocs };