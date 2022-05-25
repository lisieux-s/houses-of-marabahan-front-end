import { useState, createContext } from 'react';

export const HouseContext = createContext(null)

const HOUSE_ID_KEY = 'marabahani-house-id';
const HOUSE_NAME_KEY = 'marabahani-house-name'
const localHouseId = localStorage.getItem(HOUSE_ID_KEY)
const localHouseName = localStorage.getItem(HOUSE_NAME_KEY)

export function HouseProvider({ children }) {
    const [houseId, setHouseId] = useState(localHouseId);
    const [houseName, setHouseName] = useState(localHouseName);

    function storeHouseData(data) {
        setHouseId(data.id)
        setHouseName(data.name)
        localStorage.setItem(HOUSE_ID_KEY, JSON.stringify(data.id))
        localStorage.setItem(HOUSE_NAME_KEY, JSON.stringify(data.name))

    }

    function removeHouseData() {
        setHouseId(null);
        localStorage.removeItem(HOUSE_ID_KEY)
        localStorage.removeItem(HOUSE_NAME_KEY)
    }

 
    return(
        <HouseContext.Provider value={{ houseId, houseName, storeHouseData, removeHouseData }}>
            {children}
        </HouseContext.Provider>
    )
}