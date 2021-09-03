import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDZpknla6NEtTmHl1GQ8EqfwaWKc2atsGM",
  authDomain: "spirous-figma-plugin.firebaseapp.com",
  projectId: "spirous-figma-plugin",
  storageBucket: "spirous-figma-plugin.appspot.com",
  messagingSenderId: "330106529581",
  appId: "1:330106529581:web:d8252430ef837eb7f115a4",
  measurementId: "G-4QV28SJJKE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
export { auth, db, storage };
export default firebase;