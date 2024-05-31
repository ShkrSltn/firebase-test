// Конфигурация вашего веб-приложения Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCCMRU7EaJBbXeT1eACJcAKn1gE8_fLe4o",
    authDomain: "testy-eke.firebaseapp.com",
    projectId: "testy-eke",
    storageBucket: "testy-eke.appspot.com",
    messagingSenderId: "800584601445",
    appId: "1:800584601445:web:54d446152515364e1e5b8c",
    measurementId: "G-XTBCGWVM02"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);

// Инициализация Firestore и Authentication
const db = firebase.firestore();
const auth = firebase.auth();

// Обработчик нажатия кнопки для входа
document.getElementById('loginButton').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Вход выполнен
            const user = userCredential.user;
            console.log('Вход выполнен:', user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Ошибка входа:', errorCode, errorMessage);
        });

    // Change page to main.html
    window.location.href = 'main.html';
});

// Обработчик нажатия кнопки для регистрации
document.getElementById('registerButton').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Регистрация выполнена
            const user = userCredential.user;
            console.log('Регистрация выполнена:', user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Ошибка регистрации:', errorCode, errorMessage);
        });
    window.location.href = 'main.html';
});


// Обработчик нажатия кнопки для входа через Google
document.getElementById('googleButton').addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((userCredential) => {
            // Вход выполнен через Google
            const user = userCredential.user;
            console.log('Вход выполнен через Google:', user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Ошибка входа через Google:', errorCode, errorMessage);
        });
    window.location.href = 'main.html';
});
