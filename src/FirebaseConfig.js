import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAMjjrWnUOCdDfNNuSm5gGgN0DfgB1ww3s",
  authDomain: "todoapp-8a327.firebaseapp.com",
  projectId: "todoapp-8a327",
  storageBucket: "todoapp-8a327.appspot.com",
  messagingSenderId: "1038625127802",
  appId: "1:1038625127802:web:e62045cb891e02d264eac3"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db= getFirestore(app);
export default app;