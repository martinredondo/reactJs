import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
 
const firebaseConfig = {
  apiKey: "AIzaSyAsbPG6Y3a9lPoXANW2PeIrW5UcL8NAKtk",
  authDomain: "dream-books-coderhouse.firebaseapp.com",
  projectId: "dream-books-coderhouse",
  storageBucket: "dream-books-coderhouse.appspot.com",
  messagingSenderId: "417236802841",
  appId: "1:417236802841:web:006c1e7479407f94247988"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;