import { Request, Response } from 'express';

import * as itemService from '../services/itemService.js'

export async function addToStorage(req: Request, res: Response) {
    const body = req.body;
    await itemService.addToStorage(body.itemId, body.houseId)
    res.sendStatus(201);
}