import { Item } from '@prisma/client';
import * as itemRepository from '../repositories/itemRepository';

export type CreateItemData = Omit<Item, 'id'>;

export async function findByName(name: string) {
  const item = await itemRepository.findByName(name);
  if (!item) throw { type: 'NOT_FOUND', message: 'Item not found' };
  return item;
}

export async function addToStorage(itemId: number, houseId: number) {
  await itemRepository.addToStorage(itemId, houseId);
}
