// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDV2_ZD8yBVYFu2yfhH_vouc94cFfj7QQ",
  authDomain: "fir-course-a1a75.firebaseapp.com",
  projectId: "fir-course-a1a75",
  storageBucket: "fir-course-a1a75.appspot.com",
  messagingSenderId: "1066342331120",
  appId: "1:1066342331120:web:445cf3040b780e00ecc835",
  measurementId: "G-TPDFLEQD08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

