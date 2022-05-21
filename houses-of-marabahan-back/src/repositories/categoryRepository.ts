import { prisma } from '../database.js';

import { CategoryData } from '../services/categoryService.js';

export async function create(categoryData: CategoryData) {
  await prisma.category.create({
    data: categoryData,
  });
}

export async function findByName(name: string) {
  return await prisma.category.findUnique({
    where: { name },
  });
}

export async function findMany() {
  return await prisma.category.findMany();
}
