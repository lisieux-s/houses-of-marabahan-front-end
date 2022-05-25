import { useState, createContext } from 'react';

export const AuthContext = createContext(null);

const AUTH_TOKEN_KEY = 'marabahani-token'
const localToken = localStorage.getItem(AUTH_TOKEN_KEY);

export function AuthProvider({ children }) {
    const [token, setToken] = useState(localToken);

    function signIn(token) {
        setToken(token);
        localStorage.setItem(AUTH_TOKEN_KEY, token)
    }

    function signOut() {
        setToken(null);
        localStorage.removeItem(AUTH_TOKEN_KEY);

    }

    return(
        <AuthContext.Provider value={{ token, signIn, signOut }} >
            {children}
        </AuthContext.Provider>
    )
}