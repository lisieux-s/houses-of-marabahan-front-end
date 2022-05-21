import { useState, useEffect } from 'react';

import { Selection } from '../../../components/Selection/style';
import { Square } from '../../../components/Square/style';
import AddItem from './AddItem';
import EditItem from './EditItem';

import api from '../../../services/api';
import { supabase } from '../../../services/supabaseClient';

export default function Items() {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const [categories, setCategories] = useState(null);
  const [items, setItems] = useState(null);
  const itemBlobsHashtable = {};
  const [itemBlobs, setItemBlobs] = useState({});

  useEffect(() => {
    async function getAllItems() {
      const { data } = await api.getAllItems();
      setItems(data);
    }
    async function getAllCategories() {
      const { data } = await api.getAllCategories();
      setCategories(data);
    }
    getAllItems();
    getAllCategories();
  }, []);


  useEffect(() => {
    async function downloadImage(name, category) {
      try {
        const { data } = await supabase.storage
          .from(`/public/marabahani/items/${category}`)
          .download(`${name}.png`);
        const url = URL.createObjectURL(data);
        itemBlobsHashtable[name] = url;
      } catch (error) {
        console.log(error);
      }

    }

    async function populateKindBlobs() {
      if (!items) return;
      for (let item of items) {
        if (!itemBlobsHashtable[item.name]) {
          await downloadImage(item.name, item.category.name);
        }
      }
      setItemBlobs(itemBlobsHashtable)
    }
    populateKindBlobs();
  }, [items]);

  return (
    <main>
      <h3>
        Add a new item{' '}
        <button onClick={() => setAddModalIsOpen(true)}>+</button>
      </h3>
      <AddItem
        modalIsOpen={addModalIsOpen}
        setModalIsOpen={setAddModalIsOpen}
        categories={categories}
      />
      <h3>Item list</h3>
      {items ? (
        <Selection>
          {items.map((item) => (
            <Square key={item.id}>
              <p>{item.name}</p>
              <img src={itemBlobs[item.name]} alt={item.name} />
            </Square>
          ))}
        </Selection>
      ) : (
        'Loading items...'
      )}
      <EditItem modalIsOpen={editModalIsOpen} />
    </main>
  );
}
