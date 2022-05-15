import bcrypt from 'bcrypt';

import { House } from '@prisma/client';

import houseRepository from '../repositories/houseRepository.js';

export type CreateHouseData = Omit<House, 'id'>;

export async function checkExistingHouse(name: string) {
    return await houseRepository.findByName(name);
  }

export async function signUp(createHouseData: CreateHouseData) {
  if (await checkExistingHouse(createHouseData.name)) {
    throw {
      type: 'CONFLICT',
      message: 'A house with this name already exists.',
    };
  }

  const passwordHash = bcrypt.hashSync(createHouseData.password, 8);
  await houseRepository.create({ ...createHouseData, password: passwordHash });
}
