// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCckied6Dy_WL0HbZKDxzkd2MPYpP0onoA",
  authDomain: "final-152235865100139.firebaseapp.com",
  projectId: "final-152235865100139",
  storageBucket: "final-152235865100139.appspot.com",
  messagingSenderId: "39525141242",
  appId: "1:39525141242:web:6b400f0525e9d20e34d743",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerDenganEmailDanPassword = async (email, password) => {
  try {
    //User yang didapatkan otomatis di sign in kan
    const userYangDidapatkan = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(
      "User yang teregis dan berhasil login: ",
      userYangDidapatkan.user
    );
  } catch (err) {
    console.log(err);
    console.log("Error code auth", err.code);
    console.log("Error msg auth", err.message);
  }
};

const loginDenganEmailDanPassword = async (email, password) => {
  try {
    const userYangLogin = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User yang login: ", userYangLogin.user);
  } catch (err) {
    console.log(err);
    console.log("Error code auth", err.code);
    console.log("Error msg auth", err.message);
  }
};
const resetPasswordKarenaLupa = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.log(err);
  }
};
const keluarDariAplikasi = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  registerDenganEmailDanPassword,
  loginDenganEmailDanPassword,
  resetPasswordKarenaLupa,
  keluarDariAplikasi,
};
