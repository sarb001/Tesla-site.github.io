import { initializeApp } from "@firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = 
{
    apiKey: "AIzaSyCzEkl9LufZrMN6TiQeHO0cCSjH5YI6ha8",
    authDomain: "tesla-clone-1f0e3.firebaseapp.com",
    projectId: "tesla-clone-1f0e3",
    storageBucket: "tesla-clone-1f0e3.appspot.com",
    messagingSenderId: "803012875922",
    appId: "1:803012875922:web:e2cfaa24e122de75daf84b",
    measurementId: "G-6M8E6PKGJT"
  };
  
 const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;


