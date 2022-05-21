import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Selection } from '../../components/Selection/style';
import { CharacterPortrait } from '../../components/CharacterPortrait/style';

import useAuth from '../../hooks/useAuth';
import useHouse from '../../hooks/useHouse';
import useCharacter from '../../hooks/useCharacter';

import api from '../../services/api';

import { supabase } from '../../services/supabaseClient';
import SignIn from '../../components/SignIn';

export default function CreateCharacter() {
  const navigate = useNavigate();

  const { token } = useAuth();
  const { houseId } = useHouse();
  const { storeActiveCharacterData } = useCharacter()

  let houseName = '';
  if (localStorage.getItem('marabahani-house-name')?.length > 1) {
    houseName = JSON.parse(localStorage.getItem('marabahani-house-name'));
  }

  const hashtable = {};

  const [kinds, setKinds] = useState([]);
  const [kindBlobs, setKindBlobs] = useState({});

  const [formData, setFormData] = useState({
    kindId: '',
    name: '',
    seeks: '',
    fears: '',
  });
  const [inputWidth, setInputWidth] = useState('500px');

  const [modalIsOpen, setModalIsOpen] = useState(true);

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

    async function populateKindBlobs() {
      for (let kind of kinds) {
        if (!hashtable[kind.name]) {
          await downloadImage(kind.name);
        }
      }
      setKindBlobs(hashtable);
    }
    populateKindBlobs();
  }, [kinds]);

  useEffect(() => {
    const width = 128 + formData.name.length * 16;
    setInputWidth(`${width}px`);
  }, [formData.name]);

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await api.createCharacter(formData, houseId, token);
    storeActiveCharacterData(formData)
    navigate('/home');
  }

  if (!token)
    return (
      <SignIn
        message={'Please sign in before creating a character!'}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    );

  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>What is your kind?</h3>
        <Selection>
          {kinds.map((kind, index) => (
            <div key={index}>
              <CharacterPortrait
                htmlFor={`kind${index}`}
                selected={parseInt(kind.id) === parseInt(formData.kindId)}
                image={kindBlobs[kind.name]}
                create={true}
              >
                <p>{kind.name}</p>
              </CharacterPortrait>
              <input
                id={`kind${index}`}
                type='radio'
                value={kind.id}
                name='kindId'
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
          required
        />
        <button>Join the House of {houseName}</button>
      </form>
    </main>
  );
}
