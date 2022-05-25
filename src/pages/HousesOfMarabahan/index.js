import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth'

import { StyledLink } from '../../components/StyledLink/style'

export default function HousesOfMarabahan() {
    const navigate = useNavigate();
    const { token } = useAuth();

    if(token) navigate('/home')
    return(
        <main>
            Welcome to Marabahan!
            <StyledLink to='items'><button>Edit items</button></StyledLink>
        </main>
    )
}