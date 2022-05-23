import { useState, createContext } from 'react';

export const CharacterContext = createContext(null)


// const ACTIVE_CHARACTER_NAME_KEY = 'marabahani-active-character'

// const localActiveCharacterName = localStorage.getItem(ACTIVE_CHARACTER_NAME_KEY)

export function CharacterProvider({ children }) {
    const [activeCharacterName, setActiveCharacterName] = useState(null)
    const [activeCharacterId, setActiveCharacterId] = useState(null)
    const [activeCharacter, setActiveCharacter] = useState(null)

    function storeActiveCharacterData(data) {
        setActiveCharacter(data)
        setActiveCharacterName(data.name);
        setActiveCharacterId(data.id)
    }

    function removeActiveCharacterData() {
        setActiveCharacterName(null)
        setActiveCharacterId(null)
    }

 
    return(
        <CharacterContext.Provider value={{ activeCharacter, activeCharacterName, activeCharacterId, storeActiveCharacterData, removeActiveCharacterData }}>
            {children}
        </CharacterContext.Provider>
    )
}