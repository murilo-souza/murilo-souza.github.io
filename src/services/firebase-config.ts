import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDwpfXm2Z--eO6Gozy_CRSJRxl6DE_7qWo",
  authDomain: "myportfolio-f6dd7.firebaseapp.com",
  projectId: "myportfolio-f6dd7",
  storageBucket: "myportfolio-f6dd7.appspot.com",
  messagingSenderId: "20001610106",
  appId: "1:20001610106:web:2db2e11e41dfa45ff35ec3"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);