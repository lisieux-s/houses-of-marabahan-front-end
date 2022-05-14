import { Link } from "react-router-dom"

import { StyledNav } from "./style"
import LOGO from '../../assets/logo.png'

export default function NavBar() {
    return(
        <StyledNav>
            <Link to='/home'><img className='logo' src={LOGO} alt="Houses of Marabahan" /></Link>
        </StyledNav>
    )
}