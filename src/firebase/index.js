// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8D-6fanvQJ4g7WwLNPweLT5U8Nm77OlE",
  authDomain: "fir-react-upload-f85cf.firebaseapp.com",
  projectId: "fir-react-upload-f85cf",
  storageBucket: "fir-react-upload-f85cf.appspot.com",
  messagingSenderId: "726916583741",
  appId: "1:726916583741:web:d151f25d1192d279e23554",
  measurementId: "G-M9E1JV44VR"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

//Export storage
const storage = getStorage(firebase);
export { storage, firebase as default };