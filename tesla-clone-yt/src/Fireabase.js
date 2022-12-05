
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDatkNzvjP5_NJLmmXRANeQPeXF3EsJXxk",
  authDomain: "tesla-full-stack.firebaseapp.com",
  projectId: "tesla-full-stack",
  storageBucket: "tesla-full-stack.appspot.com",
  messagingSenderId: "453292017053",
  appId: "1:453292017053:web:ec88ad5f497b6de1d51b74",
  measurementId: "G-F5RSNPBL6H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

