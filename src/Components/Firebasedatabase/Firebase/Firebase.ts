import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAYl62a5tZVwTheVKQg50WD5CSAmX8MlwY",
  authDomain: "resturant-app-13aa9.firebaseapp.com",
  projectId: "resturant-app-13aa9",
  storageBucket: "resturant-app-13aa9.appspot.com",
  messagingSenderId: "650030393287",
  appId: "1:650030393287:web:614d934435edd5c187dbe2"
};
export const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app)
export const auth = getAuth(app)