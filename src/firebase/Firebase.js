import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAi4PRTsbW7UAr9XB76skWJd36F0af_zKQ",
  authDomain: "food-delivery-app-f3846.firebaseapp.com",
  projectId: "food-delivery-app-f3846",
  storageBucket: "food-delivery-app-f3846.appspot.com",
  messagingSenderId: "155747674611",
  appId: "1:155747674611:web:f772e7bd284c43bd458a86",
  measurementId: "G-DC5BEPYY9F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth };
