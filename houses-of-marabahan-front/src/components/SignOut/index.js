import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth"
import useHouse from "../../hooks/useHouse"
import useCharacter from "../../hooks/useCharacter";

export default function SignOut() {
    const navigate = useNavigate();

    const { signOut } = useAuth();
    const { removeHouseData } = useHouse();
    const { removeActiveCharacterData } = useCharacter();

    function handleClick() {
        signOut();
        removeHouseData();
        removeActiveCharacterData();
        navigate('/');
    }
    return(
        <p onClick={() => handleClick()}>Sign out</p>
    )
}