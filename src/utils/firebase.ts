
// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyBKubzQOqjgOJBhGDr6-cOIorYlHBVCsZw",
  // authDomain: "eduvault-dev.firebaseapp.com",
  // projectId: "eduvault-dev",
  // storageBucket: "eduvault-dev.appspot.com",
  // messagingSenderId: "305396282192",
  // appId: "1:305396282192:web:98b9be5d65c8c8d0123456"

  apiKey: "AIzaSyCYhL6Ce-Ph-Tgvuja7EuTBFRyoRaEbX_c",
  authDomain: "eduvault-a23aa.firebaseapp.com",
  projectId: "eduvault-a23aa",
  storageBucket: "eduvault-a23aa.firebasestorage.app",
  messagingSenderId: "764922858248",
  appId: "1:764922858248:web:20fc85be5de7d17b803abd",
  measurementId: "G-W87E0L5ZSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

