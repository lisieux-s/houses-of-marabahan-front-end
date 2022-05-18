import { useState, createContext } from 'react';

export const AuthContext = createContext(null);

const TOKEN = 'marabahani-token'
const localToken = localStorage.getItem(TOKEN);

export function AuthProvider({ children }) {
    const [token, setToken] = useState(localToken);

    function signIn(token) {
        setToken(token);
        localStorage.setItem(TOKEN, token)
    }

    function signOut() {
        setToken(null)
        localStorage.removeItem(TOKEN);
    }

    return(
        <AuthContext.Provider value={{ token, signIn, signOut }} >
            {children}
        </AuthContext.Provider>
    )
}