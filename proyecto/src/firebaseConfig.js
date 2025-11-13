import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
apiKey: "AIzaSyCo-yps0j-1f5EUdokQxhbVq8LF17TLXvs",
  authDomain: "pokeapi-81480.firebaseapp.com",
  projectId: "pokeapi-81480",
  storageBucket: "pokeapi-81480.firebasestorage.app",
  messagingSenderId: "667665828774",
  appId: "1:667665828774:web:6d6ff3a0adb69865f9dd67"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };