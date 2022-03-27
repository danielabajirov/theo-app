import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCh9xXPMyoTet6ducw7NrlC9jmSni0HP3k",
    authDomain: "lc-cl-8679d.firebaseapp.com",
    databaseURL: "https://lc-cl-8679d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lc-cl-8679d",
    storageBucket: "lc-cl-8679d.appspot.com",
    messagingSenderId: "958162256584",
    appId: "1:958162256584:web:e7552add9784deeaf15bfd",
    measurementId: "G-PKCV3QRYCN"
};

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  export default db;

 