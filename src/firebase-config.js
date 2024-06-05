import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyByiZB2Yf3bO-rxzbAAwxt9dys3155Qd8o",
    authDomain: "my-first-project-violetcv.firebaseapp.com",
    projectId: "my-first-project-violetcv",
    storageBucket: "my-first-project-violetcv.appspot.com",
    messagingSenderId: "653049962470",
    appId: "1:653049962470:web:cf59e7b1a8f6f74d004027",
    measurementId: "G-TMV9C2CTS1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
