import { Request, Response } from "express";

import * as categoryService from '../services/categoryService.js';

export async function getAll(req: Request, res: Response) {
    const categories = await categoryService.findMany();
    res.send(categories)
}

export async function create(req: Request, res: Response) {
    const category = req.body;
    await categoryService.create(category)
    res.sendStatus(201);
}