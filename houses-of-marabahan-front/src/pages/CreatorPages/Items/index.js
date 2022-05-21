import { useState, useEffect } from 'react';

import { Square } from '../../../components/Square/style';
import AddItem from './AddItem';
import EditItem from './EditItem';

export default function Items() {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const [items, setItems] = useState(null);


  return (
    <main>
      <h3>
        Add a new item <button onClick={() => setAddModalIsOpen(true)}>+</button>
      </h3>
      <AddItem modalIsOpen={addModalIsOpen} setModalIsOpen={setAddModalIsOpen}/>
      <h3>Item list</h3>
      item list goes here
      <EditItem modalIsOpen={editModalIsOpen} />
    </main>
  );
}
