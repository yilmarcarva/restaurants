import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBIpRE2-cHsAvIjtbDzEhcB0o7wIb46syg",
    authDomain: "restaurants-f550c.firebaseapp.com",
    projectId: "restaurants-f550c",
    storageBucket: "restaurants-f550c.appspot.com",
    messagingSenderId: "844489052312",
    appId: "1:844489052312:web:e4bb38bec736eb968700ed"
  };
  // Initialize Firebase
  
  export const firebaseApp=firebase.initializeApp(firebaseConfig);