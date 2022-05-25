import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Sidebar } from '../style';
import InformationBox from '../../InformationBox';

import useAuth from '../../../hooks/useInteract';
import useHouse from '../../../hooks/useHouse';
import useCharacter from '../../../hooks/useCharacter';
import useInteract from '../../../hooks/useInteract';

import api from '../../../services/api';

export default function RightBar() {
  const { token } = useAuth();

  const { houseId } = useHouse();

  const { activeCharacter } = useCharacter();
  const { storeActiveCharacterData } = useCharacter();

  const { info } = useInteract();
  const { message } = useInteract();

  const { disableActions } = useInteract();
  const { storageActions } = useInteract();
  const { characterActions } = useInteract();

  const [displayInfo, setDisplayInfo] = useState('');
  const path = useLocation().pathname;

  useEffect(() => {
    setDisplayInfo(info);
    const timer = setTimeout(async () => {
      setDisplayInfo('');
    }, 5000);

    return () => clearTimeout(timer);
  }, [info]);

  useEffect(() => {
    setDisplayInfo('');
    disableActions();
  }, [path]);

  async function setAsActive() {
    await api.setActiveCharacter(info.houseId, info.id, token);
    storeActiveCharacterData(info);
  }

  async function moveToInventory(itemId, houseId, activeCharacterId) {
    const body = {
      itemId,
      houseId: parseInt(houseId),
      characterId: activeCharacterId,
    };
    await api.moveToInventory(body);
  }

  return (
    <Sidebar right={true}>
      {displayInfo ? (
        <InformationBox>
          <h2>{displayInfo.name}</h2>
          <p>{displayInfo.description}</p>
          {storageActions ? (
            <button
              onClick={() =>
                moveToInventory(info.id, houseId, activeCharacter.id)
              }
            >
              Move to inventory
            </button>
          ) : (
            ''
          )}
          {characterActions ? (
            <button onClick={() => setAsActive()}>Set as active</button>
          ) : (
            ''
          )}
        </InformationBox>
      ) : (
        ''
      )}
      {message ? (
        <InformationBox type='alert'>
          <p className='alert'>{message}</p>
        </InformationBox>
      ) : (
        ''
      )}
    </Sidebar>
  );
}
