import { Card } from "./style"
import { CharacterPortrait } from "../CharacterPortrait/style"

export default function CharacterCard() {

    return(
        <Card>
            <CharacterPortrait>
            </CharacterPortrait>
            <h4>character name</h4>
        </Card>
    )
}