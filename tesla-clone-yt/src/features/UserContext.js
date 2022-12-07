import { createContext, useContext, useEffect, useState } from "react";
import { 
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged,

 } from 'firebase/auth';

import  { auth } from '../Fireabase';

const auth1  = createContext();                          // Create Context

export function FirstProvider({children})
{   
    const [user,setuser] = useState('');
    function signup(email,password){                     // account creating 
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function login(email,password){                         // Logging in  
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logout()
    {
         return signOut(auth);
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth ,(currentuser) => {
            setuser(currentuser);
        });
        return() => {
            unsubscribe() ;
        }
    },[])

    return(
        <>
          <auth1.Provider value = {{auth,signup,login,logout}}>
             {children}
          </auth1.Provider>
        </>
    )
}

export function useAuth()
{
    return useContext(auth1);
}