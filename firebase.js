// ⚠️ КОНФИГУРАЦИЯ FIREBASE (AlpharaonStore)
// Глобальная переменная, доступная везде
window.firebaseConfig = {
    apiKey: "AIzaSyCGpT5b6LScM4bSCFJkp_THSUilsy5Ab10",
    authDomain: "alpharaonstore.firebaseapp.com",
    databaseURL: "https://alpharaonstore-default-rtdb.firebaseio.com",
    projectId: "alpharaonstore",
    storageBucket: "alpharaonstore.firebasestorage.app",
    messagingSenderId: "737637143974",
    appId: "1:737637143974:web:b7485f0c791ee6ce9d6b67",
    measurementId: "G-P3XYK90HZ4"
};

// Инициализация (Если firebase загружен)
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(window.firebaseConfig);
    window.db = firebase.database();
    console.log("🔥 Firebase Compat Connected!");
} else {
    console.error("Firebase SDK not loaded!");
}
