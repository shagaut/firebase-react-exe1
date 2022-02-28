import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMxBnBl2ZZr0MX37inoTjEKE3qTNPzOME",
  authDomain: "fir-react-exe1.firebaseapp.com",
  projectId: "fir-react-exe1",
  storageBucket: "fir-react-exe1.appspot.com",
  messagingSenderId: "169283569781",
  appId: "1:169283569781:web:f771efa6a2675f1a4d503c",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
