// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuPDT3jNAvjz6Nh3L_z4ZjnPvbd7Okxkw",
  authDomain: "social-event-auth.firebaseapp.com",
  projectId: "social-event-auth",
  storageBucket: "social-event-auth.appspot.com",
  messagingSenderId: "818051957954",
  appId: "1:818051957954:web:104d13d386e9363783275b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;