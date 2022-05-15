import itemRepository from "../repositories/itemRepository.js";

import { CreateItemData } from "./itemService";

export async function createItem(createItemData: CreateItemData) {
    return await itemRepository.create(createItemData);
}