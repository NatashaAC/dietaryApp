import * as firebase from 'firebase';

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSQTmAEQZIljd9RxkWeuHQA3FcYsX8Vsk",
  authDomain: "nutridish-database.firebaseapp.com",
  databaseURL: "https://nutridish-database.firebaseio.com",
  projectId: "nutridish-database",
  storageBucket: "nutridish-database.appspot.com"
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;