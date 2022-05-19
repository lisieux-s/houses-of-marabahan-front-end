import { useState } from 'react';
import { Link } from 'react-router-dom';


import { StyledNav } from './style';
import { Dropdown } from '../Dropdown/style';
import SignIn from '../SignIn';
import SignOut from '../SignOut';

import LOGO from '../../assets/logo.png';

import useAuth from '../../hooks/useAuth';
import useHouse from '../../hooks/useHouse';



export default function NavBar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { token } = useAuth();

  const houseName = JSON.parse(localStorage.getItem("marabahani-house-name"))

  return (
    <>
      <StyledNav>
        <button></button>
        <Link to='/home'>
          <img className='logo' src={LOGO} alt='Houses of Marabahan' />
        </Link>
        {token ? (
          <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
            House of {houseName}
            <Dropdown isOpen={menuIsOpen}>
              <li><SignOut /></li>
            </Dropdown>
          </button>
        ) : (
          <button onClick={() => setModalIsOpen(true)}>Enter</button>
        )}
      </StyledNav>
      <SignIn modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
}
