import { Request, Response } from 'express';

import * as kindService from '../services/kindService.js';

export async function getKinds(req: Request, res: Response) {
    const kinds = await kindService.findMany();
    res.send(kinds);
}