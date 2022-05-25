import { useContext } from "react";

import { CharacterContext } from "../contexts/CharacterContext";

export default function useCharacter() {
    const characterContext = useContext(CharacterContext);
    return characterContext;
}