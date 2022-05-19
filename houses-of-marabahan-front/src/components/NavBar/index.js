import { useState } from 'react';
import { Link } from 'react-router-dom';

import { StyledNav } from './style';
import SignIn from '../SignIn';
import LOGO from '../../assets/logo.png';

import useAuth from '../../hooks/useAuth';
import useHouse from '../../hooks/useHouse';
import { useEffect } from 'react/cjs/react.production.min';

import api from '../../services/api';

export default function NavBar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { token } = useAuth();
  const { house, setHouse } = useHouse();


  async function getHouse() {
    const { data } = await api.findHouseByName(house);
    console.log(data)
    setHouse(data);
  }

  return (
    <>
      <StyledNav>
        <button></button>
        <Link to='/home'>
          <img className='logo' src={LOGO} alt='Houses of Marabahan' />
        </Link>
        {token ? (
          <button>House of {house}</button>
        ) : (
          <button onClick={() => setModalIsOpen(true)}>Enter</button>
        )}
      </StyledNav>
      <SignIn modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
}
