import { useState, useEffect } from 'react';

import { Selection } from '../../components/Selection/style';
import { CharacterPortrait } from '../../components/CharacterPortrait/style';

import useHouse from '../../hooks/useHouse';

import api from '../../services/api';

import { supabase } from '../../services/supabaseClient';

export default function CreateCharacter() {
  const { house } = useHouse();

  const hashtable = {};

  const [kinds, setKinds] = useState([]);
  const [kindBlobs, setKindBlobs] = useState({});

  const [formData, setFormData] = useState({
    kind: '',
    name: '',
    seeks: '',
    fears: '',
  });
  const [inputWidth, setInputWidth] = useState('500px');

  useEffect(() => {
    async function getKinds() {
      const { data } = await api.getKinds();
      setKinds(data);
    }
    getKinds();
  }, []);

  useEffect(() => {
    async function downloadImage(name) {
      const { data } = await supabase.storage
        .from('/public/marabahani/kinds')
        .download(`${name}.png`);
      const url = URL.createObjectURL(data);
      hashtable[name] = url;
    }
    kinds.forEach(async (kind) => {
      if (!hashtable[kind.name]) {
        await downloadImage(kind.name);
      }
      setKindBlobs(hashtable); //por que as outras sprites so aparecem depois de clicar?
    });
  }, [kinds]);

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
                image={kindBlobs[kind.name]}
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
        <input
          type='text'
          value={formData.seeks}
          name='seeks'
          onChange={(e) => handleChange(e)}
        />

        <h3>What do you fear?</h3>
        <input
          type='text'
          value={formData.fears}
          name='fears'
          onChange={(e) => handleChange(e)}
        />

        <h3>What is your name?</h3>
        <input
          type='text'
          value={formData.name}
          name='name'
          style={{ width: inputWidth, textAlign: 'center', fontSize: '36px' }}
          onChange={(e) => handleChange(e)}
        />
        <button>Join the House of {house}</button>
      </form>
    </main>
  );
}
