import { Request, Response } from 'express';

import * as characterService from '../services/characterService.js';

export async function createCharacter(req: Request, res: Response) {
  const { name } = req.body;
  const { kindId } = req.body;
  const kindIdInt = parseInt(kindId)
  const { seeks } = req.body;
  const { fears } = req.body;
  
  const { id } = req.params
  const houseId = parseInt(id)

  await characterService.create({
      name,
      kindId: kindIdInt,
      houseId,
      seeks,
      fears
  });
  res.sendStatus(201);
}

export async function setAsActive(req: Request, res: Response) {
  const houseId = req.params.id;
  const { characterId } = req.body;
  const houseIdNumber = parseInt(houseId);
  const characterIdNumber = parseInt(characterId)
  console.log(characterId)

  await characterService.setAsActive(houseIdNumber, characterIdNumber)
  res.send(200);
}

export async function findActiveCharacter(req: Request, res: Response) {
  const id = req.params.id;

  const houseIdNumber = parseInt(id);

  const character = await characterService.getActiveCharacter(houseIdNumber)
  res.send(character);
}

export async function findCharacterByHouse(req: Request, res: Response) {
  const id = req.params.id;
  const idNumber = parseInt(id)
  const characters = await characterService.findByHouse(idNumber);
  res.send(characters)
}

export async function getInventory(req: Request, res: Response) {
  const { id } = req.params
  const idNumber = parseInt(id)
  const inventory = await characterService.getInventory(idNumber);
  res.send(inventory);
}