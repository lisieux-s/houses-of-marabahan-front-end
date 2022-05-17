import { useState, useEffect } from 'react';

import kinds from '../../assets/lore/kinds';

import { Selection } from '../../components/Selection/style';
import { CharacterPortrait } from '../../components/CharacterPortrait/style';

export default function CreateCharacter() {
  const [formData, setFormData] = useState({
    kind: '',
    name: '',
  });
  const [inputWidth, setInputWidth] = useState('500px');

  useEffect(() => {
    const width = 128 + formData.name.length * 16;
    setInputWidth(`${width}px`);
  }, [formData.name]);

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  return (
    <main>
      <form>
        <h3>What is your kind?</h3>
        <Selection>
          {kinds.map((kind, index) => (
            <div key={index}>
              <CharacterPortrait
                htmlFor={`kind${index}`}
                selected={kind.name === formData.kind}
                image={kind.sprite}
                create={true}
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

        <h3>What do you seek?</h3>
        <input />


        <h3>What do you fear?</h3>
        <input />
        
        <h3>What is your name?</h3>
        <input
          type='text'
          value={formData.name}
          name='name'
          style={{ width: inputWidth, textAlign: 'center', fontSize: '36px' }}
          onChange={(e) => handleChange(e)}
        />
        <button>Join house</button>
      </form>
    </main>
  );
}
