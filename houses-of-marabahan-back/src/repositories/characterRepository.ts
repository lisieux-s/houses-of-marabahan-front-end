import { prisma } from '../database.js';

import { CharacterData } from '../services/characterService.js';

export async function create(characterData: CharacterData) {
  await prisma.character.create({
    data: characterData,
  });
}

export async function findCharacter(characterData: CharacterData) {
  return await prisma.character.findFirst({
    where: {
      name: characterData.name,
      houseId: characterData.houseId,
    },
  });
}
