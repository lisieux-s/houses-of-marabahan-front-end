import { prisma } from "../database.js";

import { HouseData } from '../services/houseService.js'

async function create(houseData: HouseData) {
    return prisma.house.create({
        data: houseData
    })
}

async function findByName(name: string) {
    return prisma.house.findUnique({
        where: { name }
    })
}


export default {
    create,
    findByName
}