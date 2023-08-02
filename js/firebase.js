import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// import {collection, addDoc, setDoc, doc, getFirestore} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js"
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


// createUserWithEmailAndPassword(auth, "codeon-site@gmail.com", "code.beyond.limits")

/*
signInWithEmailAndPassword(auth, "codeon-site@gmail.com", "code.beyond.limits")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
*/

function login() {
  signInWithEmailAndPassword(auth, document.getElementById("username-input-field").value, document.getElementById("password-input-field").value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const UserUID = user.uid
    localStorage.setItem("firb-log-usr",user.uid)
  })
  .catch(() => {
    document.getElementById("incorrect-details-error").style.visibility = "visible";
  });
}
window.login = login;