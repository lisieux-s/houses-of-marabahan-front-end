import { useState, createContext } from 'react';

export const InteractContext = createContext(null);

export function InteractProvider({ children }) {
    const [info, setInfo] = useState('')

    function select(selection) {
        setInfo(selection);
    }

    return(
        <InteractContext.Provider value={{ select, info }} >
            {children}
        </InteractContext.Provider>
    )
}