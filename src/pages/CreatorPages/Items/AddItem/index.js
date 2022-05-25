import { useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';

import { Modal } from '../../../../components/Modal/style';
import { Square } from '../../../../components/Square/style';

import api from '../../../../services/api';
import { supabase } from '../../../../services/supabaseClient';

export default function AddItem({ modalIsOpen, setModalIsOpen, categories }) {
  const [formData, setFormData] = useState({
    name: '',
    category: {},
    description: '',
    sprite: '',
  });

  useEffect(() => {
    console.log(formData.category);
  }, [formData]);

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    try {
      await api.createItem({
        name: formData.name,
        categoryId: formData.category.id,
        description: formData.description,
      });
      if (formData.sprite) {
        await uploadImage();
      }
      setFormData({
        name: '',
        category: '',
        description: '',
        sprite: '',
      });
      setModalIsOpen(false);
    } catch (error) {
      alert('Please try again in a moment');
      console.log(error);
    }
  }

  async function uploadImage({ target }) {
    try {
      const file = formData.sprite;
      const fileExt = file.name.split('.').pop();
      const fileName = `${formData.name}.${fileExt}`;
      const filePath = formData.name;

      let { error: uploadError } = await supabase.storage
        .from(`public/marabahani/${formData.category.name}`)
        .upload(formData.name, formData.sprite);
      if (uploadError) throw uploadError;
    } catch (error) {
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
              {formData.sprite ? formData.sprite : <p>Upload image</p>}
            </Square>
            <input
              id='input-sprite'
              type='file'
              name='sprite'
              value={formData.sprite}
              accept='.png'
              onChange={(e) => handleChange(e)}
            />
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
            <select type='' name='category'>
              <option value={0}>None</option>
              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category}
                  onClick={() => {
                    setFormData({ ...formData, category });
                  }}
                >
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
