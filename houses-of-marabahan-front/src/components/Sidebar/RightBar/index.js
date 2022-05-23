import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Sidebar } from '../style';
import InformationBox from '../../InformationBox';

import useInteract from '../../../hooks/useInteract';


export default function RightBar() {
  const { info } = useInteract();
  const [displayInfo, setDisplayInfo] = useState('');
  const path = useLocation().pathname

  useEffect(() => {
    setDisplayInfo(info);
  }, [info]);

  useEffect(() => {
    setDisplayInfo('')
  }, [path])

  if(!displayInfo) return ''
  return (
    <Sidebar right={true}>
      <InformationBox>
        <h2>{displayInfo.name}</h2>
        <p>{displayInfo.description}</p>
      </InformationBox>
    </Sidebar>
  );
}
