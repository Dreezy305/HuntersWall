// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC6XbRT4vbd5QR_5GZDoxxWIc0VqTd4rJY",
  authDomain: "hunterswall-cf12b.firebaseapp.com",
  projectId: "hunterswall-cf12b",
  storageBucket: "hunterswall-cf12b.appspot.com",
  messagingSenderId: "40369055482",
  appId: "1:40369055482:web:389163f66a81cf601acb43",
  measurementId: "G-LW4H5BEYLG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
