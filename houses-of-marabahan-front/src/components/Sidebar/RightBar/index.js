import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Sidebar } from '../style';
import InformationBox from '../../InformationBox';

import useAuth from '../../../hooks/useInteract';
import useCharacter from '../../../hooks/useCharacter'
import useInteract from '../../../hooks/useInteract';

import api from '../../../services/api';

export default function RightBar() {
    const { token } = useAuth();
    const { storeActiveCharacterData } = useCharacter();

  const { info } = useInteract();
  const { message } = useInteract();
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
  }, [path]);

  async function setAsActive() {
    console.log(info);
    await api.setActiveCharacter(info.houseId, info.id, token)
    storeActiveCharacterData(info)
  }

  return (
    <Sidebar right={true}>
      {displayInfo ? (
        <InformationBox>
          <h2>{displayInfo.name}</h2>
          <p>{displayInfo.description}</p>
          {storageActions ? <button>Move to inventory</button> : ''}
          {characterActions ? <button onClick={() => setAsActive()}>Set as active</button> : ''}
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
