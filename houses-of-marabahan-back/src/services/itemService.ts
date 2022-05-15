import { Item } from "@prisma/client";
import itemRepository from "../repositories/itemRepository";

export type CreateItemData = Omit<Item, 'id'>

export async function addToStorage(itemId: number, houseId: number) {
    await itemRepository.addToStorage(itemId, houseId);
}