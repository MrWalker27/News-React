import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdL2jQbMoLz6FCaIx5kJIlnoSqzOat8qM",
  authDomain: "news-api-2476e.firebaseapp.com",
  projectId: "news-api-2476e",
  storageBucket: "news-api-2476e.appspot.com",
  messagingSenderId: "391162655591",
  appId: "1:391162655591:web:9b77e28513214b6cefb5c2",
  measurementId: "G-YJQS64EBWY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};