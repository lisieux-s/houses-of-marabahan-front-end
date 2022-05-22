import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { House } from '@prisma/client';

import * as houseRepository from '../repositories/houseRepository.js';
import * as itemRepository from '../repositories/itemRepository.js';

export type HouseData = Omit<House, 'id'>;

export async function findByName(name: string) {
  return await houseRepository.findByName(name);
}

export async function findById(id: number) {
  const house = await houseRepository.findById(id);
  if(!house) throw {
    type: 'NOT_FOUND',
    message: 'No such house'
  }
  return house;
}

export async function signUp(createHouseData: HouseData, item: string) {
  if (await findByName(createHouseData.name)) {
    throw {
      type: 'CONFLICT',
      message: 'A house with this name already exists.',
    };
  }

  const passwordHash = bcrypt.hashSync(createHouseData.password, 8);
  await houseRepository.create({ ...createHouseData, password: passwordHash });
  const house = await houseRepository.findByName(createHouseData.name);
  switch (item) {
    case 'shovel':
      await itemRepository.addToStorage(1, house.id);
    case 'sword':
      await itemRepository.addToStorage(2, house.id);
    case 'knitting kit':
      await itemRepository.addToStorage(3, house.id);
  }
}

export async function signIn(signInData: HouseData) {
  const house = await getHouseOrFail(signInData);
  const token = jwt.sign({ houseId: house.id }, process.env.JWT_SECRET);
  return token;
}

async function getHouseOrFail(signInData: HouseData) {
  console.log(signInData.name)
  const house = await findByName(signInData.name);
  if (!house) throw { type: 'UNAUTHORIZED', message: 'There is no such house' };
  if (!bcrypt.compareSync(signInData.password, house.password))
    throw { type: 'UNAUTHORIZED', message: 'Incorrect password' };
  return house;
}

export async function getStorage(houseId: number) {
  await findById(houseId)
  return await houseRepository.getStorage(houseId)
}