import { useEffect, useState } from 'react';
import { List } from '../../components/List/style';
import { Selection } from '../../components/Selection/style';
import { Square } from '../../components/Square/style';

import useInteract from '../../hooks/useInteract'

import api from '../../services/api';
import { supabase } from '../../services/supabaseClient';

export default function Mikaila() {
  const { select } = useInteract();

  const [portrait, setPortrait] = useState(null);
  const [items, setItems] = useState(null);
  const itemBlobsHashtable = {};
  const [itemBlobs, setItemBlobs] = useState(null);
  useEffect(() => {
    async function downloadImage() {
      try {
        const { data, error } = await supabase.storage
          .from('public/marabahani/NPCs')
          .download('mikaila.png');
        if (error) {
          throw error;
        }

        const url = URL.createObjectURL(data);
        setPortrait(url);
      } catch (error) {
        console.log(error);
      }
    }

    async function getItems() {
      const { data } = await api.getAllItems();
      setItems(data);
    }
    downloadImage();
    getItems();
  }, []);

  useEffect(() => {
    async function downloadImage(category, name) {
      try {
        const { data, error } = await supabase.storage
          .from('public/marabahani/items/' + category)
          .download(`${name}.png`);
        if (error) return;
        const url = URL.createObjectURL(data);
        itemBlobsHashtable[name] = url;
      } catch (error) {
        console.log(error);
      }
    }

    async function populateItemBlobs() {
      if (!items) return '';
      for (let item of items) {
        if (!itemBlobsHashtable[item.name]) {
          await downloadImage(item.category.name, item.name);
        }
      }
      setItemBlobs(itemBlobsHashtable);
    }
    populateItemBlobs();
  }, [items]);

  if (!items) return '';
  return (
    <main>
      <h1>Mikaila's Shop</h1>
      <List>
        <div>
          <img
            src={portrait}
            alt='Mikaila'
            style={{ filter: 'grayscale(100%)' }}
          />
          <div className='box-shadow align-justify-center'>
            <p>Mikaila's free advice of today:</p>
            <h2 className='text-align-center'>
              "You can never have too many shovels. Seriously, just trust me on
              this one."
            </h2>
          </div>
        </div>
      </List>
      <Selection className='box-shadow'>
        {items && itemBlobs
          ? items.map((item) => (
              <Square key={item.name} onClick={() => select(item)}>
                <img src={itemBlobs[item.name]} alt={item.name} />
                <p>{item.name}</p>
              </Square>
            ))
          : `Sorry, sweetie, I'm all out of stock right now.`}
      </Selection>
    </main>
  );
}
