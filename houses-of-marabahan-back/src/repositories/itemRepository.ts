import { prisma } from "../database.js";

import { CreateItemData } from "../services/itemService.js"; 

async function create(createItemData: CreateItemData) {
    await prisma.item.create({
        data: {
            name: createItemData.name,
            spriteUrl: createItemData.spriteUrl,
            description: createItemData.description
        }
    })
}

async function addToStorage(itemId: number, houseId: number) {
    await prisma.houseItem.create({
        data: {
            itemId,
            houseId
        }
    })
}
async function moveToStorage() {}
async function addToInventory() {}
async function moveToInventory() {}

export default {
    create, addToStorage
}