import bcrypt from 'bcrypt';

import { House } from '@prisma/client';

import houseRepository from '../repositories/houseRepository.js';
import itemRepository from '../repositories/itemRepository.js';

export type CreateHouseData = Omit<House, 'id'>;

export async function checkExistingHouse(name: string) {
    return await houseRepository.findByName(name);
  }

export async function signUp(createHouseData: CreateHouseData, item: string) {
  if (await checkExistingHouse(createHouseData.name)) {
    throw {
      type: 'CONFLICT',
      message: 'A house with this name already exists.',
    };
  }

  const passwordHash = bcrypt.hashSync(createHouseData.password, 8);
  await houseRepository.create({ ...createHouseData, password: passwordHash });
  const house = await houseRepository.findByName(createHouseData.name);
  console.log(house)
  switch(item) {
    case 'shovel': 
      await itemRepository.addToStorage(1, house.id);
    case 'sword':
      await itemRepository.addToStorage(2, house.id);
    case 'knitting kit': 
    await itemRepository.addToStorage(3, house.id)
  }
  

}
