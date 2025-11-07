import React, { createContext, useState, useEffect } from 'react';
import { setAuthToken } from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('user');
        return saved ? JSON.parse(saved) : null;
    });
    useEffect(() => {
        const token = localStorage.getItem('token');
        setAuthToken(token);
    }, []);
    const login = (token, user) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        setAuthToken(token);
        setUser(user);
    };
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setAuthToken(null);
        setUser(null);
    };
    return (<AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>);
};