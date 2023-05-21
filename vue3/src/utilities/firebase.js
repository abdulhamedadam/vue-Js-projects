// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4dQXiSLRWFpUwyezUmIuU3BiGPMUL93Q",
  authDomain: "myfristcloudproject-d24e6.firebaseapp.com",
  databaseURL: "https://myfristcloudproject-d24e6-default-rtdb.firebaseio.com",
  projectId: "myfristcloudproject-d24e6",
  storageBucket: "myfristcloudproject-d24e6.appspot.com",
  messagingSenderId: "633163292917",
  appId: "1:633163292917:web:ca5b0b06b49fbe94f5a5bc",
  measurementId: "G-ML0G81RRJ3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;