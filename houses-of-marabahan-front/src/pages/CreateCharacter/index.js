import { useState } from 'react';

import kinds from '../../assets/lore/kinds';

import { Selection } from '../../components/Selection/style';
import { Square } from '../../components/Square/style';
import { CharacterPortrait } from '../../components/CharacterPortrait/style';

export default function CreateCharacter() {
  const [characterData, setCharacterData] = useState({
    kind: '',
    name: '',
  });

  function handleChange({ target }) {
    setCharacterData({ ...characterData, [target.name]: target.value });
    console.log(characterData);
  }

  return (
    <main>
      <form>
        <p>What is your kind?</p>
        <Selection>
          {kinds.map((kind, index) => (
            <div key={index}>
              <CharacterPortrait
                htmlFor={`kind${index}`}
                selection={kind.name === characterData.kind}
                image={kind.sprite}
              >
                <p>{kind.name}</p>
              </CharacterPortrait>
              <input
                id={`kind${index}`}
                type='radio'
                value={kind.name}
                name='kind'
                onChange={(e) => handleChange(e)}
              />
            </div>
          ))}
        </Selection>
        <Selection>
          <p>What is your name?</p>
          <input
            type='text'
            value={characterData.name}
            name='name'
            onChange={(e) => handleChange(e)}
          />
          <p>What do you seek?</p>
          <input />
        </Selection>
      </form>
    </main>
  );
}
