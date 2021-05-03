import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDmVQtRUrQZJFOr2ZvfbWx6KYqe0_bAhQI",
  authDomain: "facebooklogin-625f7.firebaseapp.com",
  projectId: "facebooklogin-625f7",
  storageBucket: "facebooklogin-625f7.appspot.com",
  messagingSenderId: "194442594024",
  appId: "1:194442594024:web:1cd9f99ca215c4f1eceb5d",
  measurementId: "G-WRK6VXB2V9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
