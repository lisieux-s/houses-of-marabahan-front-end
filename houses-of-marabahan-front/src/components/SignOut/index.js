import useAuth from "../../hooks/useAuth"
import useHouse from "../../hooks/useHouse"

export default function SignOut() {
    const { signOut } = useAuth();
    const { removeHouseData } = useHouse();

    function handleClick() {
        signOut();
        removeHouseData();
    }
    return(
        <p onClick={() => handleClick()}>Sign out</p>
    )
}