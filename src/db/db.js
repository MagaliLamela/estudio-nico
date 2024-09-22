// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKWJreCCPMPd5eGimZ_pRR4LTHhIHoXVs",
  authDomain: "estudio-juridico-bgr.firebaseapp.com",
  projectId: "estudio-juridico-bgr",
  storageBucket: "estudio-juridico-bgr.appspot.com",
  messagingSenderId: "692725832615",
  appId: "1:692725832615:web:184beaa046cb340d39f482"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db