import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Square } from '../../components/Square/style';
import { Selection } from '../../components/Selection/style';

import api from '../../services/api';

import SHOVEL from '../../assets/items/starter_shovel.png';
import SWORD from '../../assets/items/starter_sword.png';
import KNITTING_KIT from '../../assets/items/starter_knitting_kit.png'

export default function CreateHouse() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    starterItem: '',
  });
  const [inputWidth, setInputWidth] = useState('500px');

  //add function for filtering names (length, allowed characters...)
  //add tooltip for cases when name is unavailable

  useEffect(() => {
    const delay = setTimeout(async () => {
      if (formData.name.length >= 3) {
        const result = await api.findHouseByName(formData.name);
        if (result.data) console.log('Sorry, this name is unavailable.');
      }
    }, 1000);

    return () => clearTimeout(delay);
  }, [formData.name]);

  useEffect(() => {
    const width = 128 + formData.name.length * 16;
    setInputWidth(`${width}px`);
  }, [formData.name]);

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    checkPasswordConfirmation();

    const houseData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    const starterItem = formData.starterItem;

    await api.signUp({
      houseData,
      starterItem,
    });

    //log in with data,
    //store stuff in localStorage, 
    //send to home and prompt character creation

    navigate('/home');
  }

  function checkPasswordConfirmation() {
    if (formData.password !== formData.passwordConfirm)
      alert('Passwords must be the same!');
  }

  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Create an account</h3>
        <input
          type='email'
          placeholder='e-mail'
          name='email'
          value={formData.email}
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          value={formData.password}
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <input
          type='password'
          placeholder='confirm your password'
          name='passwordConfirm'
          value={formData.passwordConfirm}
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <h3>Choose a starter item</h3>
        <Selection>
          <Square htmlFor='shovel' selection={formData.starterItem === 'shovel'}>
          <img src={SHOVEL} alt='sword' />
            <p>shovel</p>
            
          </Square>
          <input
            id='shovel'
            type='radio'
            name='starterItem'
            value='shovel'
            onChange={(e) => handleChange(e)}
          />
          <Square htmlFor='sword' selection={formData.starterItem === 'sword'}>
          <img src={SWORD} alt='sword' />
            <p>sword</p>
            
          </Square>
          <input
            id='sword'
            type='radio'
            name='starterItem'
            value='sword'
            onChange={(e) => handleChange(e)}
          />
          <Square
            htmlFor='knitting-kit'
            selection={formData.starterItem === 'knitting kit'}
          >
            <img src={KNITTING_KIT} alt='sword' />
            <p>knitting kit</p>
            
          </Square>
          <input
            id='knitting-kit'
            type='radio'
            name='starterItem'
            value='knitting kit'
            onChange={(e) => handleChange(e)}
          />
        </Selection>
        <h3>Choose a name for your house</h3>
        <h1>House of</h1>
        <input
          type='text'
          placeholder='name'
          name='name'
          value={formData.name}
          onChange={(e) => {
            handleChange(e);
          }}
          style={{ width: inputWidth, textAlign: 'center', fontSize: '36px' }}
          required
        />
        <button>Send</button>
      </form>
    </main>
  );
}
