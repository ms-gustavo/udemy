import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAt2M88uk0ixRzd7av1WK85gvt07Ge6inU",
  authDomain: "miniblog-5da76.firebaseapp.com",
  projectId: "miniblog-5da76",
  storageBucket: "miniblog-5da76.appspot.com",
  messagingSenderId: "1091881209275",
  appId: "1:1091881209275:web:4ebafe2df5767b2df8c89e",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
