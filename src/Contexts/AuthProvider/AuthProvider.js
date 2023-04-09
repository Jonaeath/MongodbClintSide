import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const providerLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    
    useEffect( ()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('on state user change',currentUser)
            setLoading(false)
            setUser(currentUser);
        })
        return () =>{
            unsubcribe();
        }
    },[])

    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const createUser = (email,password) => {
        setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authinfo = {user, providerLogin, signInUser, createUser, logOut, loading};

    return (
        <AuthContext.Provider value={ authinfo }>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;