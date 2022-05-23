import { useState, createContext } from 'react';

export const InteractContext = createContext(null);

export function InteractProvider({ children }) {
    const [info, setInfo] = useState('')
    const [message, setMessage] = useState(null)

    function select(selection) {
        setInfo(selection);
    }

    function alert(message) {
        setMessage(message)
    }

    return(
        <InteractContext.Provider value={{ select, info, alert, message }} >
            {children}
        </InteractContext.Provider>
    )
}