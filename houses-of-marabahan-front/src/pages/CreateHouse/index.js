import { useState } from 'react';


import { Card } from '../../components/Card/style';
import { Selection } from '../../components/Selection/style';



export default function CreateHouse() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    starterItem: '',
  });

  async function isNameAvailable() {}

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  //check name availability through api

  function handleSubmit(e) {
    e.preventDefault();
    checkPasswordConfirmation();
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
        type='text'
          placeholder='Name of your house'
          name='name'
          value={formData.name}
          onChange={(e) => {
            handleChange(e);
            isNameAvailable();
          }}
          required
        />
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
            selection={formData.starterItem === 'shovel'}
          />
          <input
            id='shovel'
            type='radio'
            name='starterItem'
            value='shovel'
            onChange={(e) => handleChange(e)}
          />
          <Card htmlFor='sword' selection={formData.starterItem === 'sword'} />
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
          />
          <input
            id='knitting-kit'
            type='radio'
            name='starterItem'
            value='knitting kit'
            onChange={(e) => handleChange(e)}
          />
        </Selection>
        <button>Send</button>
      </form>
    </main>
  );
}
