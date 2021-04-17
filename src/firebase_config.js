import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDxL3T2LnLDNMAJ6RmcfbRicpDVAh53hs",
  authDomain: "task-tracker-c069d.firebaseapp.com",
  projectId: "task-tracker-c069d",
  storageBucket: "task-tracker-c069d.appspot.com",
  messagingSenderId: "1069110333713",
  appId: "1:1069110333713:web:3bf15a03e6cb851ece3cb0",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
