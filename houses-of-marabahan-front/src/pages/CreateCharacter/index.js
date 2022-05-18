import { useState, useEffect } from 'react';

import kinds from '../../assets/lore/kinds';

import { Selection } from '../../components/Selection/style';
import { CharacterPortrait } from '../../components/CharacterPortrait/style';

import { supabase } from '../../services/supabaseClient';

export default function CreateCharacter() {
  const [formData, setFormData] = useState({
    kind: '',
    name: '',
  });
  const [inputWidth, setInputWidth] = useState('500px');

  const hashTable = {}
  const [kindImages, setKindImages] = useState({})

  //dynamic input width
  useEffect(() => {
    const width = 128 + formData.name.length * 16;
    setInputWidth(`${width}px`);
  }, [formData.name]);

  //form data
  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  //load sprites
  useEffect(() => {
    downloadImages();
  }, [])


  function downloadImages() {
    kinds.forEach(async (kind) => {
        const name = await kind.name;
        const url = await downloadImage(name)
        console.log(url)
        if(url) setKindImages(name[url])
        console.log(kindImages)
    })
  }

  async function downloadImage(path) {
    const { data } = await supabase.storage
      .from('/public/marabahani/kinds')
      .download(path + '.png');
    return URL.createObjectURL(data);
  }

  function returnImage(kind) {
    const name = kind.name;
    return hashTable[name]
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
                image={kindImages}
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
