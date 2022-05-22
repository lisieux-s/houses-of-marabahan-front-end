import { Link } from 'react-router-dom';

import { Garden } from '../../components/Garden/style';
import TILLED_SOIL_SQUARE from '../../assets/house/tilled_soil.png';

import Characters from './Characters';

export default function Home() {
  return (
    <main>
      <Link to='/create/character'>Create a new character</Link>
      <Garden>
        garden goes here
      </Garden>
      <div>
        storage goes here
      </div>
      <Characters />
    </main>
  );
}
