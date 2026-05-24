import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyA8aU4EikOi1MQvO69WhLU5dPe1O8j8LME",
  authDomain: "sophrosyne-36055.firebaseapp.com",
  projectId: "sophrosyne-36055",
  storageBucket: "sophrosyne-36055.firebasestorage.app",
  messagingSenderId: "519498789186",
  appId: "1:519498789186:web:62e65f339e3b0d505758db",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
