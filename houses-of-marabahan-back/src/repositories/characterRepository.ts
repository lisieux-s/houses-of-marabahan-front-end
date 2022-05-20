import { prisma } from '../database.js';

import { CharacterData } from '../services/characterService.js';

export async function create(characterData: CharacterData) {
  await prisma.character.create({
    data: characterData,
  });
}

export async function findCharacterByName(characterData: CharacterData) {
  return await prisma.character.findFirst({
    where: {
      name: characterData.name,
      houseId: characterData.houseId,
    },
  });
}

export async function findCharacterById(id: number) {
  return await prisma.character.findUnique({
    where: { id }
  })
}

export async function removeActiveCharacter(
  houseId: number,
) {
  await prisma.character.updateMany({
    where: {
      houseId,
    },
    data: { active: false },
  });
}

export async function addActiveCharacter(id: number) {
  await prisma.character.update({
    where: { id },
    data: { active: true }
  })
} 

export async function getActiveCharacter(houseId: number) {
  return await prisma.character.findFirst({
    where: {
      houseId,
      active: true
    }
  })
}
