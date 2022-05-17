import { Sidebar } from "../style";
import CharacterCard from "../../CharacterCard";

export default function LeftBar() {
    return(
        <Sidebar left={true}>
        <CharacterCard />
        </Sidebar>
    )
}