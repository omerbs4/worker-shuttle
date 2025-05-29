import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBWw77rV0I9PNaYjDGq-vWoF1d0oXf5Esg",
  authDomain: "worker-service-c8f31.firebaseapp.com",
  projectId: "worker-service-c8f31",
  storageBucket: "worker-service-c8f31.firebasestorage.app",
  messagingSenderId: "236612020952",
  appId: "1:236612020952:web:82a638fb5d9ab4ad3305ad",
  measurementId: "G-X2BHMCRKB6"
};

const app = initializeApp(firebaseConfig);
const analytics = getFirestore(app);
export const db = getFirestore(app);
export default app;