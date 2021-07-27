// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyANpw49h9YqXiIep1-S6HfCLZ5VYNJ_6WY",
  authDomain: "pre-eminent.firebaseapp.com",
  projectId: "pre-eminent",
  storageBucket: "pre-eminent.appspot.com",
  messagingSenderId: "1025306883157",
  appId: "1:1025306883157:web:9bb11709ac49fa437e10dc",
  measurementId: "G-3SBEF9RN08",
});

const db = firebaseApp.firestore();

export default db;
