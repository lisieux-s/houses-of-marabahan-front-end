import { useState, useEffect } from 'react';

import AddIcon from '@mui/icons-material/Add';

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

  const [selectedItem, setSelectedItem, getSelectedItem] = useState(null)


  //add useEffect for rendering updated item data
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
      setItemBlobs(itemBlobsHashtable);
    }
    populateKindBlobs();
  }, [items]);

  async function handleClick(item) {
    setSelectedItem(item);
  }

  useEffect(() => {
    console.log(selectedItem)
    setEditModalIsOpen(true)
  }, [selectedItem])

  return (
    <main>
      <h3>
        Add a new item{' '}
        <AddIcon onClick={() => setAddModalIsOpen(true)} />
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
            <Square key={item.id} onClick={() => handleClick(item)}>
              <p>{item.name}</p>
              <img src={itemBlobs[item.name]} alt={item.name} />
            </Square>
          ))}
        </Selection>
      ) : (
        'Loading items...'
      )}
      <EditItem
        modalIsOpen={editModalIsOpen}
        setModalIsOpen={setEditModalIsOpen}
        categories={categories}
        item={selectedItem}
        setItem={setSelectedItem}
        itemBlobs={itemBlobs}
      />
    </main>
  );
}
