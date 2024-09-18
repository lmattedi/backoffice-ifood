// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG8DQVXTZ208Cf5bxNVoH6f9CK9Nhtn3Q",
  authDomain: "backoffice-ifood.firebaseapp.com",
  projectId: "backoffice-ifood",
  storageBucket: "backoffice-ifood.appspot.com",
  messagingSenderId: "690974491735",
  appId: "1:690974491735:web:c9715a6e07cafeaf8a8f12",
  measurementId: "G-VF14MT3PED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);