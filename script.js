import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMa1ZBBH6Xdi-MqqG4-B8z2oBtOzb3MfA",
    authDomain: "drnfeez-c4037.firebaseapp.com",
    databaseURL: "https://drnfeez-c4037-default-rtdb.firebaseio.com",
    projectId: "drnfeez-c4037",
    storageBucket: "drnfeez-c4037.firebasestorage.app",
    messagingSenderId: "912450814298",
    appId: "1:912450814298:web:2c1cd95abbda31e3a4b363"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login action
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            document.getElementById('message').textContent = `Welcome back, ${user.email}!`;
            document.getElementById('message').style.color = 'lightgreen';
        })
        .catch((error) => {
            document.getElementById('message').textContent = `Error: ${error.message}`;
            document.getElementById('message').style.color = 'red';
        });
});
