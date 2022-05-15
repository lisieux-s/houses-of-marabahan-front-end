import { useState } from 'react';
import { useEffect } from 'react';

import { Card } from '../../components/Card/style';
import { Selection } from '../../components/Selection/style';

import api from '../../services/api';

export default function CreateHouse() {
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
    const width = 128+ formData.name.length * 16
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
  }

  function checkPasswordConfirmation() {
    if (formData.password !== formData.passwordConfirm)
      alert('Passwords must be the same!');
  }

  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>Create an account</p>
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
        <p>Choose a starter item</p>
        <Selection>
          <Card
            htmlFor='shovel'
            selection={formData.starterItem=== 'shovel'}
          >
            <p>shovel</p>
          </Card>
          <input
            id='shovel'
            type='radio'
            name='starterItem'
            value='shovel'
            onChange={(e) => handleChange(e)}
          />
          <Card htmlFor='sword' selection={formData.starterItem === 'sword'}>
            <p>sword</p>
          </Card>
          <input
            id='sword'
            type='radio'
            name='starterItem'
            value='sword'
            onChange={(e) => handleChange(e)}
          />
          <Card
            htmlFor='knitting-kit'
            selection={formData.starterItem === 'knitting kit'}
          >
            <p>knitting kit</p>
          </Card>
          <input
            id='knitting-kit'
            type='radio'
            name='starterItem'
            value='knitting kit'
            onChange={(e) => handleChange(e)}
          />
        </Selection>
        <p>Choose a name for your house</p>
        <h2>House of</h2>
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
