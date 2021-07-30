import firebase from "firebase/app";
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAQiUemS5f0dwn-cau8rjE5hIn8wIA2AQg",
    authDomain: "theo-learn.firebaseapp.com",
    databaseURL: "https://theo-learn-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "theo-learn",
    storageBucket: "theo-learn.appspot.com",
    messagingSenderId: "299899111685",
    appId: "1:299899111685:web:236d0c1747993190544f6c"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  export default db;

 