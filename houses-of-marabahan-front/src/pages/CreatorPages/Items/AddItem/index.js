import { useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';

import { Modal } from '../../../../components/Modal/style';
import { Square } from '../../../../components/Square/style';

export default function AddItem({ modalIsOpen, setModalIsOpen }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    categoryId: 1,
    spritePath: '',
  });

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  return (
    <Modal isOpen={modalIsOpen}>
      <div className='x' onClick={() => setModalIsOpen(false)}>
        <CloseIcon />
      </div>
      <h1>New item</h1>
      <form>
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
            <select
              type=''
              name='category'
              value={formData.categoryId}
              onChange={(e) => handleChange(e)}
            >
              <option value={1}>Uncategorized</option>
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
