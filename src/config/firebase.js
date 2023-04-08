
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGBKyGOQlEnNuamywuDWIsIb-S9DiREYE",
  authDomain: "react-twitter-clone-c1d43.firebaseapp.com",
  projectId: "react-twitter-clone-c1d43",
  storageBucket: "react-twitter-clone-c1d43.appspot.com",
  messagingSenderId: "210563181910",
  appId: "1:210563181910:web:eea694e0179553ee4c3af7",
  measurementId: "G-BBEZDQRP19"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)