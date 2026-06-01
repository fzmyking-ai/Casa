// firebase-messaging-sw.js

// Importa os scripts do Firebase compatíveis com Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Configuração idêntica do seu Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAI-dHKJYJVOHknaQCWaNsKlRiLTmdWNTg",
    authDomain: "lista-de-compras-e744f.firebaseapp.com",
    databaseURL: "https://lista-de-compras-e744f-default-rtdb.firebaseio.com",
    projectId: "lista-de-compras-e744f",
    storageBucket: "lista-de-compras-e744f.firebasestorage.app",
    messagingSenderId: "839320575020",
    appId: "1:839320575020:web:b58a4470506688a1418589"
};

// Inicializa o app dentro do Service Worker
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Captura e exibe a notificação com o app fechado
messaging.onBackgroundMessage((payload) => {
    console.log('Notificação recebida em segundo plano: ', payload);

    const title = payload.notification?.title || "Aviso da Casa! 🏠";
    const options = {
        body: payload.notification?.body || "Você tem atualizações pendentes.",
        icon: 'https://cdn-icons-png.flaticon.com/512/599/599502.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/599/599502.png'
    };

    self.registration.showNotification(title, options);
});
