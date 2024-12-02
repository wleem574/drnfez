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
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // منع السلوك الافتراضي مؤقتًا

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // تسجيل الدخول باستخدام Firebase
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // عرض رسالة نجاح
        document.getElementById('message').textContent = `Welcome back, ${user.email}!`;
        document.getElementById('message').style.color = 'lightgreen';

        // بعد نجاح تسجيل الدخول، إرسال النموذج (تنفيذ الـ Action)
        document.getElementById('loginForm').submit();
    } catch (error) {
        // عرض رسالة خطأ
        document.getElementById('message').textContent = `Error: ${error.message}`;
        document.getElementById('message').style.color = 'red';
    }
});
