import { Request, Response } from 'express';

import * as itemService from '../services/itemService.js';

export async function create(req: Request, res: Response) {
  const { name } = req.body;
  const { description } = req.body;
  const { categoryId } = req.body;
  const categoryIdNumber = parseInt(categoryId);
  await itemService.create({
    name,
    categoryId: categoryIdNumber,
    description,
  });
  return res.sendStatus(201);
}

export async function edit(req: Request, res: Response) {
  const { name } = req.body;
  const { description } = req.body;
  const { categoryId } = req.body;
  const categoryIdNumber = parseInt(categoryId);
  const { id } = req.params;
  const itemId = parseInt(id);

  await itemService.update(itemId, name, categoryIdNumber, description);
  res.sendStatus(200);
}

export async function getAll(req: Request, res: Response) {
  const items = await itemService.findMany();
  res.send(items);
}

export async function findByName(req: Request, res: Response) {
  const { name } = req.params;
  const item = await itemService.findByName(name);
  res.send(item);
}

export async function findById(req: Request, res: Response) {
  const { id } = req.params;
  const itemId = parseInt(id);
  const item = await itemService.findById(itemId);
  res.send(item);
}

export async function addToStorage(req: Request, res: Response) {
  const body = req.body;
  await itemService.addToStorage(body.itemId, body.houseId);
  res.sendStatus(201);
}

export async function moveToInventory(req: Request, res: Response) {
  const { itemId } = req.body;
  const { houseId } = req.body;
  const { characterId } = req.body;

  const itemIdNumber = parseInt(itemId);
  const houseIdNumber = parseInt(houseId);
  const characterIdNumber = parseInt(characterId);

  await itemService.moveToInventory(
    itemIdNumber,
    houseIdNumber,
    characterIdNumber
  );
  res.sendStatus(200);
}
