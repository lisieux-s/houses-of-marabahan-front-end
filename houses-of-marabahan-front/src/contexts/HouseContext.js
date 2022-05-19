import { useState, createContext } from 'react';

export const HouseContext = createContext(null)

const HOUSE_KEY = 'marabahani-house';
const localHouse = localStorage.getItem(HOUSE_KEY)

export function HouseProvider({ children }) {
    const [house, setHouse] = useState(localHouse);

    function storeHouseData(house) {
        setHouse(house)
        localStorage.setItem(HOUSE_KEY, house)
    }

    function removeHouseData() {
        setHouse(null)
        localStorage.removeItem(HOUSE_KEY)
    }

    return(
        <HouseContext.Provider value={{ house, storeHouseData, removeHouseData }}>
            {children}
        </HouseContext.Provider>
    )
}