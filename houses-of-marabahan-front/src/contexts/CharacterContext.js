import { useState, createContext } from 'react';

export const CharacterContext = createContext(null)


const ACTIVE_CHARACTER_NAME_KEY = 'marabahani-active-character'

const localActiveCharacterName = localStorage.getItem(ACTIVE_CHARACTER_NAME_KEY)

export function CharacterProvider({ children }) {
    const [activeCharacterName, setActiveCharacterName] = useState(localActiveCharacterName)

    function storeActiveCharacterData(data) {
        setActiveCharacterName(data.name)

        localStorage.setItem(ACTIVE_CHARACTER_NAME_KEY, JSON.stringify(data.name))

    }

    function removeActiveCharacterData() {
        setActiveCharacterName(null)
        localStorage.removeItem(ACTIVE_CHARACTER_NAME_KEY)
    }

 
    return(
        <CharacterContext.Provider value={{ activeCharacterName, storeActiveCharacterData, removeActiveCharacterData }}>
            {children}
        </CharacterContext.Provider>
    )
}