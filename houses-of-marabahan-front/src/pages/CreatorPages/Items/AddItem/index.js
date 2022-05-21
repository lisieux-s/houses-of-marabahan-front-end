import { useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';

import { Modal } from '../../../../components/Modal/style';
import { Square } from '../../../../components/Square/style';

import api from '../../../../services/api';

export default function AddItem({ modalIsOpen, setModalIsOpen, categories }) {
  const [formData, setFormData] = useState({
    name: '',
    categoryId: '',
    description: '',
    sprite: '',
  });


  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.createItem({
        name: formData.name,
        categoryId: formData.categoryId,
        description: formData.description,
      });
    } catch(error) {
      alert('Please try again in a moment')
      console.log(error);
    }
  }
  if (!categories) return '';
  return (
    <Modal isOpen={modalIsOpen}>
      <div className='x' onClick={() => setModalIsOpen(false)}>
        <CloseIcon />
      </div>
      <h1>New item</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div className='outline text-align-center'>
            <p>Sprite</p>
            <Square htmlFor='input-sprite'>
              <p>Upload image</p>
            </Square>
            <input id='input-sprite' type='file' accept='.png' />
          </div>

          <div className='outline'>
            <p>Name</p>
            <input
              type='list'
              name='name'
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
            <p>Category</p>
            <select type='' name='categoryId' onChange={(e) => handleChange(e)}>
              <option value={0}>None</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <p>Description</p>
            <textarea
              type='text'
              name='description'
              value={formData.description}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <button>Create this item</button>
      </form>
    </Modal>
  );
}
