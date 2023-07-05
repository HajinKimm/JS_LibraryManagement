import React, { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorityContext = createContext()
export const useAuthority =()=> useContext(AuthorityContext)

export const AuthorityProvider = ({children}) => {
    const navigate = useNavigate()

    const [user, setUser] = useState(
        ()=>JSON.parse(localStorage.getItem('user')) || null
    )
    
    const login = (email, password)=>{
        const loguser = {
            id : 'a1234',
            email
        }
        localStorage.setItem('user', JSON.stringify(loguser))
        if(password==='1234'){
            setUser(loguser)
            navigate('/')
        }
    }
    const logout = ()=>{
        localStorage.removeItem('user')
        setUser(null)
        navigate('/')
    }

    const value = useMemo(()=>({user, login,logout, authed: !!user}),[user, login,logout])
    return (
        <AuthorityContext.Provider value={value}>
            {children}
        </AuthorityContext.Provider>
    );
};
