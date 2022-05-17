import { Character } from '@prisma/client';

import * as characterRepository from '../repositories/characterRepository.js';

export type CharacterData = Omit<Character, 'id'>;

export async function create(characterData: CharacterData) {
  if (findCharacter)
    throw {
      type: 'CONFLICT',
      message: 'Character with this name already exists in this house',
    };
  await characterRepository.create(characterData);
}

export async function findCharacter(characterData: CharacterData) {
  return await characterRepository.findCharacter(characterData);
}
