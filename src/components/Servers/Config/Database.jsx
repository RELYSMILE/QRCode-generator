import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwptRq_vW1Fcguz-e0cGap9VJSXEaEepY",
  authDomain: "blockchain-networkteam.firebaseapp.com",
  projectId: "blockchain-networkteam",
  storageBucket: "blockchain-networkteam.appspot.com",
  messagingSenderId: "412365755465",
  appId: "1:412365755465:web:aff2c57e1bcdc0004b1b98"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);