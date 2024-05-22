// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-61bf7.firebaseapp.com",
    projectId: "mern-estate-61bf7",
    storageBucket: "mern-estate-61bf7.appspot.com",
    messagingSenderId: "554404062461",
    appId: "1:554404062461:web:b8c6ccdbe2029fd5bbca94",
    measurementId: "G-NH5Z649C66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
