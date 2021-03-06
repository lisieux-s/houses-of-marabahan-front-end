import { useEffect, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';

import { List } from '../../../components/List/style';
import { Selection } from '../../../components/Selection/style';
import { StyledLink } from '../../../components/StyledLink/style';
import { CharacterPortrait } from '../../../components/CharacterPortrait/style';

import useHouse from '../../../hooks/useHouse';
import useInteract from '../../../hooks/useInteract';

import api from '../../../services/api';

import { supabase } from '../../../services/supabaseClient';

export default function Characters() {
  const { houseId } = useHouse();
  const { select } = useInteract();
  const { enableActions } = useInteract();

  const [characters, setCharacters] = useState('');
  const characterBlobsHashtable = {};
  const [characterBlobs, setCharacterBlobs] = useState({});

  useEffect(() => {
    if(!houseId) return;
    async function getCharacters() {
      const { data } = await api.findCharactersByHouse(houseId);
      setCharacters(data);
    }
    getCharacters();
  }, [houseId]);

  useEffect(() => {
    async function downloadImage(character) {
      try {
        if (character) {
          const { data } = await supabase.storage
            .from('/public/marabahani/kinds')
            .download(`${character.kind.name}.png`);
          const url = URL.createObjectURL(data);
          characterBlobsHashtable[character.name] = url;
        }
      } catch (error) {
        console.log(error);
      }
    }
    async function populateCharacterBlobs() {
      for (let character of characters) {
        if (!characterBlobsHashtable[character.name]) {
          await downloadImage(character);
        }
      }
      setCharacterBlobs(characterBlobsHashtable);
    }
    populateCharacterBlobs();
  }, [characters]);

  if (!characters) return 'Loading members...';
  return (
    <>
      <div className='justify-content-space-between'>
        <h2>Members </h2>
        <StyledLink to='/create/character'>
          <AddIcon />
        </StyledLink>
      </div>
      {characters ? (
        characters.length > 0 ? (
          <List>
            {characters.map((character) => (
              <div
                key={character.id}
                className='box-shadow'
                onClick={() => {
                  select(character);
                  enableActions('character');
                }}
              >
                <CharacterPortrait image={characterBlobs[character.name]} />
                <div>
                  <h2>{character.name}</h2>
                  <p>Seeks {character.seeks}</p>
                  <p>Fears {character.fears}</p>
                </div>
              </div>
            ))}
          </List>
        ) : (
          <Selection className='box-shadow'>
            Your house doesn't have any members.
          </Selection>
        )
      ) : (
        'Loading characters...'
      )}
    </>
  );
}
