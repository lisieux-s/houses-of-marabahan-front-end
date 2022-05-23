import { useEffect, useState } from 'react';
import { List } from '../../components/List/style';
import { Selection } from '../../components/Selection/style';
import { Square } from '../../components/Square/style';
import * as functions from '../../functions';

import api from '../../services/api';
import { supabase } from '../../services/supabaseClient';

export default function Mikaila() {
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
    async function populateItemBlobs() {
      if (items) {
        for (let item of items) {
          if (!itemBlobsHashtable[item.name]) {
            const blob = await functions.downloadItemImage(
              item.category.name,
              item.name
            );
            console.log(blob);
            itemBlobsHashtable[item.name] = blob;
          }
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
          <div className='box-shadow'>
            <h2 className='text-align-center'>
              You can never have too many shovels. Seriously, just trust me on
              this one.
            </h2>
          </div>
        </div>
      </List>
      <Selection className='box-shadow'>
        {items && itemBlobs
          ? items.map((item) => (
              <Square key={item.name}>
                <img src={itemBlobs[item.name]} alt={item.name} />
                <p>{item.name}</p>
              </Square>
            ))
          : `Sorry, sweetie, I'm all out of stock right now.`}
      </Selection>
    </main>
  );
}
