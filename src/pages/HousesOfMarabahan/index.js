import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import { StyledLink } from '../../components/StyledLink/style';

export default function HousesOfMarabahan() {
  const navigate = useNavigate();
  const { token } = useAuth();

  return (
    <main>
      <h2>Welcome to Marabahan!</h2>
      <p>Found your house, have characters join and collect items.</p>
      <p>Start by clicking "ENTER" and creating your house and your first character.</p>
      {
        //<StyledLink to='items'><button>Edit items</button></StyledLink>
      }
    </main>
  );
}
