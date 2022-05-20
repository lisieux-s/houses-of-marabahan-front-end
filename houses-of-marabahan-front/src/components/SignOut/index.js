import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth"
import useHouse from "../../hooks/useHouse"

export default function SignOut() {
    const navigate = useNavigate();

    const { signOut } = useAuth();
    const { removeHouseData } = useHouse();

    function handleClick() {
        signOut();
        removeHouseData();
        navigate('/');
    }
    return(
        <p onClick={() => handleClick()}>Sign out</p>
    )
}