import { Request, Response } from 'express';

import * as creatorService from '../services/creatorService.js';

export async function createItem(req: Request, res: Response) {
  const item = req.body;
  await creatorService.createItem(item);
  return res.sendStatus(201);
}

export async function editItem(req: Request, res: Response) {
  const { name } = req.body;
  const { spriteUrl } = req.body;
  const { description } = req.body;
  const { id } = req.params;
  const itemId = parseInt(id);
  
  await creatorService.update(
    itemId,
    name,
    spriteUrl,
    description
  );
  res.sendStatus(200)
}
