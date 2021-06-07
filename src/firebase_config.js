import firebase from "firebase/app";
import "firebase/auth"; // for authentication

const firebaseConfig = {
  apiKey: "AIzaSyBY04OWOIdixT2vI_lSOOR9jB3wts3DrVM",
  authDomain: "task-tracker-cdad2.firebaseapp.com",
  projectId: "task-tracker-cdad2",
  storageBucket: "task-tracker-cdad2.appspot.com",
  messagingSenderId: "328905720914",
  appId: "1:328905720914:web:b531f33cee537a4f424b8b",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
