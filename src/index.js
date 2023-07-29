import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

import {collection, addDoc, setDoc, doc, getFirestore} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js"
const firebaseApp = initializeApp({
  apiKey: "AIzaSyC_fj2Rek6QIX3hF6U_L7boZwXXOrLOPr4",
  authDomain: "team-codeon.firebaseapp.com",
  projectId: "team-codeon",
  storageBucket: "team-codeon.appspot.com",
  messagingSenderId: "791878813030",
  appId: "1:791878813030:web:600ca7058ef4503b42b4a7",
  measurementId: "G-CNGJSS771N",
});
const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp)
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("Logged in!");
  } else {
    console.log("No user");
  }
});

await setDoc(doc(db, "userinfo", "userpwd"), {
  username: "12345",
});