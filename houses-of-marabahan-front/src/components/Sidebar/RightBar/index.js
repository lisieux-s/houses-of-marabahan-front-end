import { Sidebar } from '../style';
import InformationBox from '../../InformationBox';

import useInteract from '../../../hooks/useInteract';
import { useEffect, useState } from 'react';

export default function RightBar() {
  const { info } = useInteract();
  const [displayInfo, setDisplayInfo] = useState('');

  useEffect(() => {
    setDisplayInfo(info);
  }, [info]);

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
