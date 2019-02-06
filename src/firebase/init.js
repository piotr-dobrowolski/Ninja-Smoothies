import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAj7MUFRK9u0MI7Cry1uQrG00rfSqNba38",
    authDomain: "ninja-smoothies-48187.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-48187.firebaseio.com",
    projectId: "ninja-smoothies-48187",
    storageBucket: "ninja-smoothies-48187.appspot.com",
    messagingSenderId: "1010775640722"
  };
  const firebaseApp = firebase.initializeApp(config);
 //firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore();