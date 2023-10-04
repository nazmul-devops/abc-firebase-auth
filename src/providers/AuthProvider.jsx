// import React from 'react';
import PropTypes from 'prop-types';
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(); 

    const createUser = () => {
        return createUser
    }

    const authInfo = {}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,

}

/**
 * 1. Create Context
 * 2. Set provider with value
 * 3. 
*/