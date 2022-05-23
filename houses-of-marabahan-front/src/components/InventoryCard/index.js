import { useState } from 'react';

import { Selection } from '../Selection/style';
import { Card } from '../CharacterCard/style';

import useCharacter from '../../hooks/useCharacter';

import * as functions from '../../functions';

import api from '../../services/api';

export default function InventoryCard() {
  const { activeCharacterName } = useCharacter();
  const [items, setItems] = useState(null);

  if (!activeCharacterName) return '';
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
