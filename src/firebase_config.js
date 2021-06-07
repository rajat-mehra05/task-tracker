import firebase from "firebase/app";
import "firebase/auth"; // for authentication

// put your own firebase config
const firebaseConfig = {
  apiKey: "",
  authDomain: "task-tracker-cdad2.firebaseapp.com",
  projectId: "task-tracker-cdad2",
  storageBucket: "task-tracker-cdad2.appspot.com",
  messagingSenderId: "",
  appId: "1::web:b531f33cee537a4f424b8b",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
