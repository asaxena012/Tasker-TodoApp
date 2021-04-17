// Firebase setup script: This will provide firebase features to rest of the app

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB4mSlnGuJVxn5z8y9L1KufAlu5MfbmVUM",
  authDomain: "tasker-firebase-react.firebaseapp.com",
  projectId: "tasker-firebase-react",
  storageBucket: "tasker-firebase-react.appspot.com",
  messagingSenderId: "384379890129",
  appId: "1:384379890129:web:2c1eb32c40a18e8a5998f0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Export firebase features you're using

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;
