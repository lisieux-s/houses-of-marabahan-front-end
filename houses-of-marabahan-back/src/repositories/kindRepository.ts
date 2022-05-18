import { prisma } from "../database.js";

export async function findMany() {
    return await prisma.kind.findMany();
}

export async function findByName(name: string) {
    return await prisma.kind.findUnique({
        where: { name }
    })
}