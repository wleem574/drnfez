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

// Login action with action://
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // منع السلوك الافتراضي للنموذج

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // تسجيل الدخول باستخدام Firebase
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // عرض رسالة نجاح
        document.getElementById('message').textContent = `Welcome back, ${user.email}!`;
        document.getElementById('message').style.color = 'lightgreen';

        // محاولة فتح رابط action://
        openActionURL("action://login_success");
    } catch (error) {
        // عرض رسالة خطأ
        document.getElementById('message').textContent = `Error: ${error.message}`;
        document.getElementById('message').style.color = 'red';

        // محاولة فتح رابط action:// للفشل
        openActionURL("action://login_failure");
    }
});

// دالة لفتح رابط action://
function openActionURL(url) {
    try {
        // محاولة فتح الرابط مباشرة
        window.location.href = url;
    } catch (e) {
        console.error(`Failed to execute action URL: ${url}`, e);
    }
}
