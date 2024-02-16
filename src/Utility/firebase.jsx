import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu-D_jDap5O8VOAU4A2MJQbnc4aHox96M",
  authDomain: "clone-70b13.firebaseapp.com",
  projectId: "clone-70b13",
  storageBucket: "clone-70b13.appspot.com",
  messagingSenderId: "701190361331",
  appId: "1:701190361331:web:ccac4b52c2e4978bbce786",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();
export const auth = firebase.auth();
// export const auth = getAuth(app);
export const db = app.firestore();
