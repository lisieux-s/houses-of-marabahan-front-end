import { prisma } from "../database.js";

import { CreateHouseData } from '../services/houseService.js'

async function create(houseData: CreateHouseData) {
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