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

  console.log(houseId)
  await characterService.create({
      name,
      kindId: kindIdInt,
      houseId,
      seeks,
      fears
  });
  res.sendStatus(201);
}
