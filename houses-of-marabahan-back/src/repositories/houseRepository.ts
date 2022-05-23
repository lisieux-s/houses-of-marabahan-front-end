import { prisma } from "../database.js";

import { HouseData } from '../services/houseService.js'

export async function create(houseData: HouseData) {
    return prisma.house.create({
        data: houseData
    })
}

export async function findByName(name: string) {
    return prisma.house.findUnique({
        where: { name }
    })
}

export async function findById(id: number) {
    return prisma.house.findUnique({
        where: { id }
    })
}

export async function getStorage(houseId: number) {
    return prisma.houseItem.findMany({
        where: { houseId },
        include: { item: {
            select: {
                id: true,
                category: true,
                name: true,
                description: true
            }
        } }
    })
}