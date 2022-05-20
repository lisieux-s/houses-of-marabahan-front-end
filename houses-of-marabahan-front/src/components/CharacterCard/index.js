import { useState, useEffect } from 'react';

import { Card } from './style';
import { CharacterPortrait } from '../CharacterPortrait/style';

import useAuth from '../../hooks/useAuth';
import useHouse from '../../hooks/useHouse';

import api from '../../services/api';
import { supabase } from '../../services/supabaseClient';

export default function CharacterCard() {
  const { token } = useAuth();
  const { houseId } = useHouse();

  const [character, setCharacter] = useState(null);
  const [characterImage, setCharacterImage] = useState(null);

  useEffect(() => {
    async function getCharacterData() {
      const { data } = await api.getActiveCharacter(houseId, token);
      setCharacter(data);
    }
    getCharacterData();
  }, []);

  useEffect(() => {
    async function downloadImage(path) {
      //for now, character image is just the kind sprite
      try {
        const { data, error } = await supabase.storage
          .from('public/marabahani/kinds')
          .download(`${path}.png`);
        if (error) throw error;
        const url = URL.createObjectURL(data);
        setCharacterImage(url);
      } catch (error) {
        console.log(`Couldn't load image: ${error.message}`);
      }
    }
    downloadImage(kindIdToKindName(character?.kindId));
  }, [character]);

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
      <CharacterPortrait image={characterImage}></CharacterPortrait>
      <h4>{character?.name}</h4>
    </Card>
  );
}
