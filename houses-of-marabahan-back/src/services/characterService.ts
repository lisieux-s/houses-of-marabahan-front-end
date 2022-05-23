import { Character } from '@prisma/client';

import * as characterRepository from '../repositories/characterRepository.js';
import * as houseService from '../services/houseService.js';

export type CharacterData = Omit<Character, 'id' | 'active'>;

export async function create(characterData: CharacterData) {
  if (await findByName(characterData))
    throw {
      type: 'CONFLICT',
      message: 'Character with this name already exists in this house',
    };
  await characterRepository.removeActiveCharacter(characterData.houseId);
  
  
  await characterRepository.create(characterData);
  const character = await findByName(characterData);
  await characterRepository.addActiveCharacter(character.id)
}

export async function findByName(characterData: CharacterData) {
  return await characterRepository.findCharacterByName(characterData);
}

export async function findById(id: number) {
  const character = await characterRepository.findCharacterById(id);
  if (!character)
    throw {
      type: 'NOT_FOUND',
      message: 'No such character',
    };
  return character;
}

export async function findByHouse(houseId: number) {
  const house = await houseService.findById(houseId);
  if(!house) throw {
    type: 'NOT_FOUND',
    message: 'No such house'
  }
  return await characterRepository.findCharacterByHouse(houseId)
}

export async function setAsActive(houseId: number, characterId: number) {
  await houseService.findById(houseId);
  await findById(characterId);
  await characterRepository.removeActiveCharacter(houseId);
  await characterRepository.addActiveCharacter(characterId);
}

export async function getActiveCharacter(houseId: number) {
  const character = await characterRepository.getActiveCharacter(houseId);
  if (!character)
    throw {
      type: 'NOT_FOUND',
      message: 'No active character found for this house',
    };
  return character;
}

export async function getInventory(characterId: number) {
  await findById(characterId);
  return await characterRepository.getInventory(characterId);
}
