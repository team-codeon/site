import { initializeApp } from "https://www.gstatic.com/firebase/9.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebase/9.0.0/firebase-app.js';
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyC_fj2Rek6QIX3hF6U_L7boZwXXOrLOPr4",
    authDomain: "team-codeon.firebaseapp.com",
    projectId: "team-codeon",
    storageBucket: "team-codeon.appspot.com",
    messagingSenderId: "791878813030",
    appId: "1:791878813030:web:600ca7058ef4503b42b4a7",
    measurementId: "G-CNGJSS771N"
});
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
db.collection('todos').getDocs();
const todosCol = collection(db, 'todos')
const snapshot = await getDocs(todosCol)

// Detect auth state
auth.onAuthStateChanged(user => {

});
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!')
    }

    else {
        console.log('No user')
    }
})