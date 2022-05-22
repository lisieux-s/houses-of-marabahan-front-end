import { useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import { Modal } from '../../../../components/Modal/style';
import { Square } from '../../../../components/Square/style';

import api from '../../../../services/api';

export default function EditItem({
  modalIsOpen,
  setModalIsOpen,
  categories,
  item,
  setItem,
  itemBlobs,
}) {
  const [disabled, setDisabled] = useState(true);
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    categoryId: '',
    description: '',
    sprite: '',
  });

  function handleChange({ target }) {
    setSuccess(false)
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.editItem({
        name: formData.name,
        categoryId: formData.categoryId,
        description: formData.description,
      }, item.id);
      setFormData({
        name: '',
        categoryId: '',
        description: '',
        sprite: ''
      })
      setDisabled(true)
      setSuccess(true)
    } catch (error) {
      alert('Please try again in a moment');
      console.log(error);
    }
  }

  async function handleCloseModal() {
    setFormData({
      name: item.name,
      categoryId: item.category,
      description: item.description,
      sprite: item.sprite,
    });
    setItem(null)
    setModalIsOpen(false);
  }

  if (!categories) return '';
  if (!item) return '';
  return (
    <Modal isOpen={modalIsOpen}>
      <div className='x' onClick={() => handleCloseModal()}>
        <CloseIcon />
      </div>
      <h1>
        Item information {disabled? <EditRoundedIcon onClick={() => setDisabled(false)}/> : '' } {' '}
      </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div className='outline text-align-center'>
            <p>Sprite</p>
            <Square htmlFor='input-sprite'>
              <p>Upload image</p>
              <img src={itemBlobs[item.name]} alt='upload' />
            </Square>
            <input
              id='input-sprite'
              type='file'
              accept='.png'
              disabled={disabled}
            />
          </div>

          <div className='outline'>
            <p>Name</p>
            <input
              type='list'
              name='name'
            placeholder={item.name}
              value={formData.name}
              onChange={(e) => handleChange(e)}
              disabled={disabled}
            />
            <p>Category</p>
            <select
              type=''
              name='categoryId'
              value={item.categoryId}
              onChange={(e) => handleChange(e)}
              disabled={disabled}
            >
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
              placeholder={item.description}
              value={formData.description}
              onChange={(e) => handleChange(e)}
              disabled={disabled}
            />
          </div>
        </div>

        <button>Save changes</button>
        {success? <p className='success'>Changes saved!</p> : ''}
      </form>
    </Modal>
  );
}
