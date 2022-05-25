import { useEffect, useState } from 'react';

import { StyledLink } from '../StyledLink/style';
import { Selection } from '../Selection/style';
import { Card } from '../CharacterCard/style';

import useHouse from '../../hooks/useHouse';
import useCharacter from '../../hooks/useCharacter';

import api from '../../services/api';

export default function InventoryCard() {
  const { activeCharacterName } = useCharacter();
  //const { activeCharacter } = useCharacter();

  const { houseId } = useHouse();
  const [items, setItems] = useState(null);
  const [activeCharacter, setActiveCharacter] = useState(null);

  useEffect(() => {
    async function getActiveCharacter() {
      const { data } = await api.getActiveCharacter(houseId);
      setActiveCharacter(data);
    }
    getActiveCharacter();
  }, []);

  useEffect(() => {
    async function getInventory() {
      console.log(activeCharacter)
      // const { data } = await api.getInventory(activeCharacter?.id);
      // setItems(data);
    }
    if(!activeCharacter) return;
    getInventory();
  }, [activeCharacter]);

  return (
    <Card>
      <Selection>
        {!items ? (
          <p className='text-align-center'>
            Looks like your inventory is empty.{' '}
            <StyledLink to='mikaila'>
              Why not go to Mikaila's to find something to buy?
            </StyledLink>
          </p>
        ) : (
          'inventory'
        )}
      </Selection>
    </Card>
  );
}
