import { useLocation } from 'react-router-dom';

import { Sidebar } from '../style';
import CharacterCard from '../../CharacterCard';
import InventoryCard from '../../InventoryCard';

import useAuth from '../../../hooks/useAuth';

export default function LeftBar() {
  const path = useLocation().pathname;

  const { token } = useAuth();

  if (path === '/items' || path === '/kinds' || path === '/create/house' || path === '/create/character')
    return '';
  if (!token) return '';
  return (
    <Sidebar left={true}>
      <CharacterCard />
      <InventoryCard />
    </Sidebar>
  );
}
