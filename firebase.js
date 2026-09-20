import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAzl1n043F7-uFk8xfLifDvj75z1INsuLM",
    authDomain: "ane-s-home.firebaseapp.com",
    projectId: "ane-s-home",
    storageBucket: "ane-s-home.firebasestorage.app",
    messagingSenderId: "484380648627",
    appId: "1:484380648627:web:6e60a13212c65e02fdfcc6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export { 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    collection, 
    addDoc, 
    getDocs, 
    ref, 
    uploadBytes, 
    getDownloadURL 
};
