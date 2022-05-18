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