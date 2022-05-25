import { useContext } from "react";

import { HouseContext } from "../contexts/HouseContext";

export default function useHouse() {
    const houseContext = useContext(HouseContext);
    return houseContext;
}