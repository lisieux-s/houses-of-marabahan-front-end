import { Request, Response } from 'express';

import * as creatorService from '../services/creatorService.js';

export async function createItem(req: Request, res: Response) {
    const item = req.body;
    await creatorService.createItem(item)
    return res.sendStatus(201)
}