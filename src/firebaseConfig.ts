import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

export const firebaseConfig = {
  apiKey: "AIzaSyAPpH4d2Ga36fqpxZpoBE4DFBw3axItZbM",
  authDomain: "pwa-firebase-isdin.firebaseapp.com",
  projectId: "pwa-firebase-isdin",
  storageBucket: "pwa-firebase-isdin.appspot.com",
  messagingSenderId: "996030331730",
  appId: "1:996030331730:web:54382ec5ee7cddc139988b"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const messaging = getMessaging(app);

export { app, analytics, auth, firestore, messaging };

