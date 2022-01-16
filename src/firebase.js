import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB08ZOGatnhXxqIBMxUinnY0iAuZ4dYkGI",
  authDomain: "react-blog-2f43d.firebaseapp.com",
  projectId: "react-blog-2f43d",
  storageBucket: "react-blog-2f43d.appspot.com",
  messagingSenderId: "1066838275251",
  appId: "1:1066838275251:web:ad4b37cc53700de6c9acc6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
