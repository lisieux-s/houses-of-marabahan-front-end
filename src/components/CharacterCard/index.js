import { useState, useEffect } from 'react';
import { StyledLink } from '../StyledLink/style'
import { Card } from './style';
import { CharacterPortrait } from '../CharacterPortrait/style';

import useAuth from '../../hooks/useAuth';
import useHouse from '../../hooks/useHouse';
import useCharacter from '../../hooks/useCharacter';

import api from '../../services/api';
import { supabase } from '../../services/supabaseClient';

export default function CharacterCard() {
  const { token } = useAuth();
  const { activeCharacter, storeActiveCharacterData } = useCharacter();
  const { houseId } = useHouse();

  const [character, setCharacter] = useState(null);
  const [characterImage, setCharacterImage] = useState(null);

  if(!activeCharacter) {
    getCharacterData();
  }

  useEffect(() => {
    if(activeCharacter !== character) {
      getCharacterData();
    }
  }, [activeCharacter]);

  useEffect(() => {
    downloadImage(character?.kind?.name);
  }, [character]);

  async function getCharacterData() {
    try {
      const { data } = await api.getActiveCharacter(houseId, token); //maybe change ir and search character by name and house using the character context thingy
      setCharacter(data);
      storeActiveCharacterData(data)
    } catch(error) {
      console.log(error)
    }
  }

  async function downloadImage(path) {
    //for now, character image is just the kind sprite
    if(!path) return;
    try {
      if (character) {
        const { data, error } = await supabase.storage
          .from('public/marabahani/kinds')
          .download(`${path}.png`);
        if (error) throw error;
        const url = URL.createObjectURL(data);
        setCharacterImage(url);
      }
    } catch (error) {
      console.log(`Couldn't load image: ${error.message}`);
    }
  }

  return (
    <Card>
      {character? <><CharacterPortrait image={characterImage}></CharacterPortrait>
      <h4>{character?.name}</h4></> : <>Your house doesn't have any characters yet. <StyledLink to={'/create/character'}><h4>Create your first!</h4></StyledLink></>}
    </Card>
  );
}
