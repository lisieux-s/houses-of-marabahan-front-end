import { useState } from 'react';

import kinds from '../../assets/lore/kinds';

import { Selection } from '../../components/Selection/style';
import { Card } from '../../components/Card/style';

export default function CreateCharacter() {
  const [characterData, setCharacterData] = useState({
    kind: '',
    name: '',
  });

  function handleChange({ target }) {
    setCharacterData({ ...characterData, [target.name]: target.value });
    console.log(target.value);
    console.log(characterData.kind);
  }

  return (
    <main>
      <div>
        <p>What is your kind?</p>
        <Selection>
          {kinds.map((kind, index) => (
            <div key={index}>
              <Card
                htmlFor={`kind${index}`}
                selection={kind.name === characterData.kind}
              >
                <p>{kind.name}</p>
                <img src={kind.sprite} alt='' />
                <p>{kind.description}</p>
              </Card>
              <input
                id={`kind${index}`}
                type='radio'
                value={kind.name}
                name='kind'
                onChange={() => {
                  setCharacterData({ ...characterData, kind: kind.name });
                  console.log(characterData);
                }}
              />
            </div>
          ))}
        </Selection>
      </div>
      <div>
        <p>What is your name?</p>
        <input />
      </div>
      <div>
        <p>What do you seek?</p>
        <input />
      </div>
    </main>
  );
}
