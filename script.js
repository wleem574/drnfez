// استيراد Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// إعداد Firebase باستخدام المعلومات المرسلة
const firebaseConfig = {
    apiKey: "AIzaSyBMa1ZBBH6Xdi-MqqG4-B8z2oBtOzb3MfA",
    authDomain: "drnfeez-c4037.firebaseapp.com",
    databaseURL: "https://drnfeez-c4037-default-rtdb.firebaseio.com",
    projectId: "drnfeez-c4037",
    storageBucket: "drnfeez-c4037.firebasestorage.app",
    messagingSenderId: "912450814298",
    appId: "1:912450814298:web:2c1cd95abbda31e3a4b363"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// التعامل مع تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            document.getElementById('message').style.color = 'lightgreen';
            document.getElementById('message').textContent = `Welcome, ${user.email}!`;
        })
        .catch((error) => {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').textContent = `Error: ${error.message}`;
        });
});

// التعامل مع زر Action
document.getElementById('actionButton').addEventListener('click', () => {
    alert('Action button clicked!');
});
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const auth = getAuth();
document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            document.getElementById('message').style.color = 'lightgreen';
            document.getElementById('message').textContent = `Account created for: ${user.email}`;
        })
        .catch((error) => {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').textContent = `Error: ${error.message}`;
        });
});
// تبديل العرض بين التسجيل وتسجيل الدخول
document.getElementById('showLogin').addEventListener('click', () => {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('registerSection').style.display = 'none';
});

document.getElementById('showRegister').addEventListener('click', () => {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('registerSection').style.display = 'block';
});
