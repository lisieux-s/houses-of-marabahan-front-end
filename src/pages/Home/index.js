//import { Garden } from '../../components/Garden/style';
//import TILLED_SOIL_SQUARE from '../../assets/house/tilled_soil.png';

import useHouse from '../../hooks/useHouse';

import Storage from './Storage';
import Characters from './Characters';

import SignIn from '../../components/SignIn';

export default function Home() {
  const { houseId } = useHouse();
  console.log(houseId);

  return houseId ? (
    <main>
      <Storage />
      <Characters />
    </main>
  ) : (
    <SignIn modalIsOpen={true} message='Please sign in to access your homepage.'/>
  );
}
