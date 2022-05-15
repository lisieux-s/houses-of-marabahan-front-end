import { Request, Response } from 'express';

import * as houseService from '../services/houseService.js';

export async function createHouse(req: Request, res: Response) {
  const { houseData } = req.body;
  const { item } = req.body;

  await houseService.signUp(houseData);
  res.sendStatus(201);
}

export async function checkNameAvailability(req: Request, res: Response) {
  const name = req.body;
  const existingHouse = await houseService.checkExistingHouse(name);
  if (existingHouse) return res.send(true);
  return res.send(false);
}
