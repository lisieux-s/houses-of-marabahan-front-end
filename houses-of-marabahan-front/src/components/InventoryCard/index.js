import { useState } from 'react';

import { Selection } from '../Selection/style';
import { Card } from '../CharacterCard/style';

import useHouse from '../../hooks/useHouse';
import useCharacter from '../../hooks/useCharacter';

import * as functions from '../../functions';

import api from '../../services/api';

export default function InventoryCard() {
  const { activeCharacterName } = useCharacter();
  const { houseId } = useHouse();
  const [items, setItems] = useState(null);
  const [activeCharacter, setActiveCharacter] = useState(null)

  if (!activeCharacterName) {
    getActiveCharacter()
  }

  async function getActiveCharacter() {
    const { data } = await api.getActiveCharacter(houseId)
    setActiveCharacter(data.name);
  }
  
  return (
    <Card>
      <Selection>
        {!items ? (
          <p className='text-align-center'>
            Looks like your inventory is empty.
          </p>
        ) : (
          'inventory card'
        )}
      </Selection>
    </Card>
  );
}
