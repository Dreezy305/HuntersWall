// import firebase from "firebase/app";
// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
    "AIzaSyC6XbRT4vbd5QR_5GZDoxxWIc0VqTd4rJY",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
    "hunterswall-cf12b.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "hunterswall-cf12b",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
    "hunterswall-cf12b.appspot.com",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "40369055482",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
    "1:40369055482:web:389163f66a81cf601acb43",
  measurementId:
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-LW4H5BEYLG",
};

// if (firebaseConfig.appId && firebaseConfig.appId.length) {
//   firebase.initializeApp(firebaseConfig);
//   if (typeof window !== undefined) {
//     if ("measurementId" in firebaseConfig) {
//       firebase.analytics();
//     }
//   }
// }

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore();

const storage = getStorage(app);

// const a = firebase.firestore.Timestamp.now().toDate().toString();

export { app, auth, db, storage };
