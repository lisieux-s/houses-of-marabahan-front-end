import { useState, useEffect } from 'react';

import { Square } from '../../../components/Square/style';
import EditItem from './EditItem';

export default function Items() {
  const [items, setItems] = useState(null);

  return (
    <main>
      <h3>New item</h3>
      <form>
        <p>Name</p>
        <input type='text' placeholder='Name' />
        <p>Description</p>
        <input type='text' placeholder='Description' />
        <p>Sprite</p>
        <Square htmlFor='input-sprite'>
          <p>Upload sprite</p>
        </Square>
        <input id='input-sprite' type='file' accept='.png' />
      </form>
      <h3>Item list</h3>
      item list goes here
      <EditItem />
    </main>
  );
}
