import { Sidebar } from "../style";
import CharacterCard from "../../CharacterCard";

import useAuth from "../../../hooks/useAuth";

export default function LeftBar() {
    const { token } = useAuth();

    if(!token) return '';
    return(
        <Sidebar left={true}>
        <CharacterCard />
        </Sidebar>
    )
}