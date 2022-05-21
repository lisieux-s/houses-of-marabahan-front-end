import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Square } from '../../components/Square/style';
import { Selection } from '../../components/Selection/style';

import useAuth from '../../hooks/useAuth'
import useHouse from '../../hooks/useHouse'

import api from '../../services/api';

export default function CreateHouse() {
  const navigate = useNavigate();

  const { signIn } = useAuth();
  const { storeHouseData } = useHouse();

  const [shovelImageUrl, setShovelImageUrl] = useState('');
  const [swordImageUrl, setSwordImageUrl] = useState('');
  const [knittingKitImageUrl, setKnittingKitImageUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    starterItem: '',
  });
  const [inputWidth, setInputWidth] = useState('500px');

  //add function for filtering names (length, allowed characters...)
  //add context for leftbar for cases when name is unavailable

  useEffect(() => {
    async function getStarterItem(id) {
      const { data } = await api.getItemById(id);
      switch (id) {
        case 1:
          setShovelImageUrl(data.spriteUrl);
          break;
        case 2:
          setSwordImageUrl(data.spriteUrl);
          break;
        case 3:
          setKnittingKitImageUrl(data.spriteUrl);
          break;
        default:
          break;
      }
    }
    for (let i = 1; i <= 3; i++) {
      getStarterItem(i);
    }
  }, []);

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
    try {

      await api.signUp({
        houseData,
        starterItem,
      });
      const { data } = await api.findHouseByName(houseData.name);
      const token = await api.signIn({ name: houseData.name, password: houseData.password });
      signIn(token);
      console.log(data)
      storeHouseData(data)

      navigate('/create/character');
    } catch (error) {}
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
          <Square htmlFor='shovel' selected={formData.starterItem === 'shovel'}>
            <img src={shovelImageUrl} alt='shovel' />
            <p>shovel</p>
          </Square>
          <input
            id='shovel'
            type='radio'
            name='starterItem'
            value='shovel'
            onChange={(e) => handleChange(e)}
          />
          <Square htmlFor='sword' selected={formData.starterItem === 'sword'}>
            <img src={swordImageUrl} alt='sword' />
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
            selected={formData.starterItem === 'knitting kit'}
          >
            <img src={knittingKitImageUrl} alt='knitting kit' />
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
