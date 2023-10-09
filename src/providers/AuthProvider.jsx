import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.confiq";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
   const [user, setUser]=useState(null)
   const [loading, setLoading]= useState(true)

   const logOut = ()=>{
        setLoading(true);
       return signOut(auth)
       
   }

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password )
    }
    const signIn =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
             
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
          unSubscribe();
        }
    },[])

   const authInfo ={
        user,
        createUser,
        logOut,
        signIn,
        signInWithGoogle,
        loading,
   }

    return (
        <AuthContext.Provider value={authInfo}>
          {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;