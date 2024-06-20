/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker
// "Default" Firebase configuration (prevents errors)
const firebaseConfig = {
    apiKey: "AIzaSyAPpH4d2Ga36fqpxZpoBE4DFBw3axItZbM",
    authDomain: "pwa-firebase-isdin.firebaseapp.com",
    projectId: "pwa-firebase-isdin",
    storageBucket: "pwa-firebase-isdin.appspot.com",
    messagingSenderId: "996030331730",
    appId: "1:996030331730:web:54382ec5ee7cddc139988b"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});