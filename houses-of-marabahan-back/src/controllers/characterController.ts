import { Request, Response } from 'express';

import * as characterService from '../services/characterService.js';

export async function createCharacter(req: Request, res: Response) {
  const { name } = req.body;
  const { kindId } = req.body;
  const { seeks } = req.body;
  const { fears } = req.body;
  
  const { id } = req.params
  const houseId = parseInt(id)
  await characterService.create({
      name,
      kindId,
      houseId,
      seeks,
      fears
  });
  res.sendStatus(201);
}
