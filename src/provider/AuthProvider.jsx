import React from 'react';
import { getAuth } from "firebase/auth";
import { createContext } from 'react';
import { useState } from 'react';
 
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    // const [user, setUser] = useState([])

    const user = null;
    const authInfo ={
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;