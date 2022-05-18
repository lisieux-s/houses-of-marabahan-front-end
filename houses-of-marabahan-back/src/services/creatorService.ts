import * as itemRepository from "../repositories/itemRepository.js";

import { CreateItemData } from "./itemService";

export async function createItem(createItemData: CreateItemData) {
    return await itemRepository.create(createItemData);
}

export async function update(
    id: number,
    name?: string,
    spriteUrl?: string,
    description?: string
  ) {
      if(name) await itemRepository.updateName(id, name);
      if(spriteUrl) await itemRepository.updateSpriteUrl(id, spriteUrl);
      if(description) await itemRepository.updateDescription(id, description);
  }