import { createContext, useCallback, useState } from 'react';

export const Auth = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(_ => {
        const user = window.localStorage.getItem('user');
        const role = window.localStorage.getItem('role');
        const id = window.localStorage.getItem('id');
        return user ? {
            user,
            role,
            id
        } : null;
    });

    const login = useCallback((user, role, id) => {
        window.localStorage.setItem('user', user);
        window.localStorage.setItem('role', role);
        window.localStorage.setItem('id', id);
        setUser({
            user,
            role,
            id
        });
    }, [setUser]);

    return (
        <Auth.Provider value={{ user, setUser, login }}>
            {children}
        </Auth.Provider>
    );
}