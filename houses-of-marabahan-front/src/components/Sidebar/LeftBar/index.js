import { Sidebar } from "../style";
import CharacterCard from "../../CharacterCard";

export default function LeftBar({ token }) {
    if(!token) return '';
    return(
        <Sidebar left={true}>
        <CharacterCard />
        </Sidebar>
    )
}