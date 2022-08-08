import firebase from "firebase/app";
import 'firebase/database'

// Your web app's Firebase configuration
console.log("Test", process.env)
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID
};

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  console.log("this db", db);

  export default db;

 