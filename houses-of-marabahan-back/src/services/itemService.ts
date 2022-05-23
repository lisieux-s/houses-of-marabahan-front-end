import { Item } from '@prisma/client';
import * as itemRepository from '../repositories/itemRepository.js';

export type CreateItemData = Omit<Item, 'id'>;

export async function create(createItemData: CreateItemData) {
  return await itemRepository.create(createItemData);
}

export async function update(
  id: number,
  name?: string,
  categoryId?: number,
  description?: string,
) {
  await itemRepository.findById(id);
  if (name) await itemRepository.updateName(id, name);
  if(categoryId) await itemRepository.updateCategoryId(id, categoryId)
  if (description) await itemRepository.updateDescription(id, description);
}

export async function findMany() {
  return await itemRepository.findMany();
}

export async function findByName(name: string) {
  const item = await itemRepository.findByName(name);
  if (!item) throw { type: 'NOT_FOUND', message: 'Item not found' };
  return item;
}

export async function findById(id: number) {
  const item = await itemRepository.findById(id);
  if (!item) throw { type: 'NOT_FOUND', message: 'Item not found' };
  return item;
}

export async function addToStorage(itemId: number, houseId: number) {
  await itemRepository.addToStorage(itemId, houseId);
}

export async function moveToInventory(itemId: number, houseId: number, characterId: number) {
  if(!await itemRepository.findInStorage(itemId, houseId)) {
    throw { type: 'NOT_FOUND', message: 'This item is not in this storage'}
  }
  await itemRepository.removeFromStorage(itemId, houseId);
  await itemRepository.addToInventory(itemId, characterId);
}