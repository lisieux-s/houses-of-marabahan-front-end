import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Modal } from '../Modal/style';

import useAuth from '../../hooks/useAuth';
import useHouse from '../../hooks/useHouse'

import api from '../../services/api';

export default function SignIn({ modalIsOpen, setModalIsOpen }) {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { storeHouseData } = useHouse();

  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  function handleModalRedirect() {
    setModalIsOpen(false);
    navigate('/create/house');
  }

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleModalSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await api.signIn(formData);
      const name = await getHouse();
      signIn(data.token);
      storeHouseData(name)
      
      setModalIsOpen(false);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  }

  async function getHouse() {
    const { data } = await api.findHouseByName(formData.name);
    return(data);
  }

  return (
    <Modal isOpen={modalIsOpen}>
      <form onSubmit={(e) => handleModalSubmit(e)}>
        <input
          placeholder='name of your house'
          type='text'
          name='name'
          value={formData.name}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          placeholder='password'
          type='password'
          name='password'
          value={formData.password}
          onChange={(e) => handleChange(e)}
          required
        />
        <button>Sign in</button>
      </form>
      <h3 onClick={() => handleModalRedirect()}>
        Don't have an account yet? Create one!
      </h3>
    </Modal>
  );
}
