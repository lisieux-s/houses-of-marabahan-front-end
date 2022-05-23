import { useEffect, useState } from 'react';

import { Selection } from '../../../components/Selection/style';
import { Square } from '../../../components/Square/style';

import useHouse from '../../../hooks/useHouse';

import api from '../../../services/api';
import { supabase } from '../../../services/supabaseClient';

export default function Storage() {
  const { houseId } = useHouse();

  const [storageItems, setStorageItems] = useState(null);
  const itemBlobsHashtable = {};
  const [itemBlobs, setItemBlobs] = useState({});

  useEffect(() => {
    async function getStorage(id) {
      const { data } = await api.getStorage(id);
      setStorageItems(data);
    }
    getStorage(houseId);
  }, []);

  useEffect(() => {
    async function downloadImage(name, category) {
      try {
        const { data } = await supabase.storage
          .from(`/public/marabahani/items/${category}`)
          .download(`${name}.png`);
        const url = URL.createObjectURL(data);
        itemBlobsHashtable[name] = url;
      } catch (error) {}
    }

    async function populateItemBlobs() {
      if (!storageItems) return;
      for (let storageItem of storageItems) {
        if (!itemBlobsHashtable[storageItem.item.name]) {
          await downloadImage(
            storageItem.item.name,
            storageItem.item.category.name
          );
        }
      }
      setItemBlobs(itemBlobsHashtable);
    }
    populateItemBlobs();
  }, [storageItems]);

  if (!storageItems) return 'Loading items...';
  return (
    <>
      <h2>Storage</h2>
      <Selection className='box-shadow'>
        {storageItems.length > 0 ? (
          <>
            {storageItems.map((storageItem) => (
              <Square key={storageItem.id}>
                {console.log(storageItem.item.name)}
                <img
                  src={itemBlobs[storageItem.item.name]}
                  alt={storageItem.item.name}
                />
                <p>{storageItem.item.name}</p>
              </Square>
            ))}
          </>
        ) : (
          'Your storage is empty.'
        )}
      </Selection>
    </>
  );
}
