import React from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useContext } from 'react';

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
};

export default useAuth;