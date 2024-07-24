import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeqAE8-Wjnorj7zcjSOQm_vgT3asKOViM",
  authDomain: "react-auth-furniro.firebaseapp.com",
  projectId: "react-auth-furniro",
  storageBucket: "react-auth-furniro.appspot.com",
  messagingSenderId: "564540139429",
  appId: "1:564540139429:web:f0277954eb3480f6d66a4c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)