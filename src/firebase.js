import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyC78NDH67qPG_TJGtjR-CNveajAo-8zMSo",
    authDomain: "unichat-bb40d.firebaseapp.com",
    projectId: "unichat-bb40d",
    storageBucket: "unichat-bb40d.appspot.com",
    messagingSenderId: "1088958564331",
    appId: "1:1088958564331:web:37267bec58e77ee5717bae",
  })
  .auth();
