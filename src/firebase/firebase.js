// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArlOvoGzzU-NqY0gaDNjp2-UVAXmaJoX0",
  authDomain: "the-news-dragon-client-68fd4.firebaseapp.com",
  projectId: "the-news-dragon-client-68fd4",
  storageBucket: "the-news-dragon-client-68fd4.appspot.com",
  messagingSenderId: "213736093762",
  appId: "1:213736093762:web:7d258278fcde4625bb95db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;