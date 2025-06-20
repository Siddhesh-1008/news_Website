
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCqnUj6mDhL73Ew6DXmOOePKvoR97PlK1U",
  authDomain: "newsapi4-c56e2.firebaseapp.com",
  projectId: "newsapi4-c56e2",
  storageBucket: "newsapi4-c56e2.appspot.com",
  messagingSenderId: "514008276207",
  appId: "1:514008276207:web:01d1876c7984a6263b8f1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;