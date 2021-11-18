// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}; */
const firebaseConfig = {
  apiKey: "AIzaSyAsbPG6Y3a9lPoXANW2PeIrW5UcL8NAKtk",
  authDomain: "dream-books-coderhouse.firebaseapp.com",
  projectId: "dream-books-coderhouse",
  storageBucket: "dream-books-coderhouse.appspot.com",
  messagingSenderId: "417236802841",
  appId: "1:417236802841:web:006c1e7479407f94247988"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;