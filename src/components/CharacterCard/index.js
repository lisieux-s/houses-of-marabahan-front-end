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

  useEffect(() => {
    getCharacterData();
  }, [houseId, token]);

  useEffect(() => {
    downloadImage(kindIdToKindName(character?.kindId));
  }, [character]);

  async function getCharacterData() {
    const { data } = await api.getActiveCharacter(houseId, token);
    setCharacter(data);
    storeActiveCharacterData(data)
  }

  async function downloadImage(path) {
    //for now, character image is just the kind sprite
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

  function kindIdToKindName(id) {
    switch (id) {
      case 1:
        return 'clayfeet';
      case 2:
        return 'paladi';
      case 3:
        return 'flowerbud';
      case 4:
        return 'merperson';
      case 5:
        return 'mogami';
      case 6:
        return 'moonlit';
      case 7:
        return 'blue folk';
      case 8:
        return 'blaoru';
      case 9:
        return 'baego';
      case 10:
        return 'revenant';
      default:
        return 'ZERO';
    }
  }

  return (
    <Card>
      {character? <><CharacterPortrait image={characterImage}></CharacterPortrait>
      <h4>{character?.name}</h4></> : <>Your house doesn't have any characters yet. <StyledLink to={'/create/character'}><h4>Create your first!</h4></StyledLink></>}
    </Card>
  );
}
