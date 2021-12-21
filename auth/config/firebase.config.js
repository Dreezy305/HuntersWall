import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

if (!firebaseConfig.appId.length) {
  firebase.initializeApp(firebaseConfig);
  if (typeof window !== undefined) {
    if ("measurementId" in firebaseConfig) {
      firebase.analytics();
    }
  }
}

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore();

const storage = getStorage(app);

// const a = firebase.firestore.Timestamp.now().toDate().toString();

export { app, auth, db, storage };

// console.log(app.name ? "Firebase Mode Activated!" : "Firebase not working :(");