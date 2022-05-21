import { useState, useEffect } from 'react';

import { Selection } from '../../../components/Selection/style';
import { Square } from '../../../components/Square/style';
import AddItem from './AddItem';
import EditItem from './EditItem';

import api from '../../../services/api';

export default function Items() {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const [items, setItems] = useState(null);
  const itemBlobsHashtable = {}
  const [itemBlobs, setItemBlobs] = useState({});


  useEffect(() => {
    async function getAllItems() {
      const { data } = await api.getAllItems();
      setItems(data);
    }
    getAllItems();
    console.log(items);
  }, []);
  return (
    <main>
      <h3>
        Add a new item{' '}
        <button onClick={() => setAddModalIsOpen(true)}>+</button>
      </h3>
      <AddItem
        modalIsOpen={addModalIsOpen}
        setModalIsOpen={setAddModalIsOpen}
      />
      <h3>Item list</h3>
      {items ? (
        <Selection>
          {items.map((item) => (
            <Square key={item.id}>
              <p>{item.name}</p>
              <img src={item.spriteUrl} alt={item.name} />
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
