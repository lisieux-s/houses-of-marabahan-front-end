import { Link } from "react-router-dom"

import { StyledNav } from "./style"

export default function NavBar() {
    return(
        <StyledNav>
            <Link to='/home'>home</Link>
            <Link to='/messages'>messages</Link>
        </StyledNav>
    )
}