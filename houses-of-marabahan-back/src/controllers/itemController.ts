import { Request, Response } from 'express';

import * as itemService from '../services/itemService.js'

export async function create(req: Request, res: Response) {
  const { name } = req.body;
  const { description } = req.body;
  const { categoryId } = req.body;
  const categoryIdNumber = parseInt(categoryId)
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
    const categoryIdNumber = parseInt(categoryId)
    const { id } = req.params;
    const itemId = parseInt(id);
  
    
    await itemService.update(
      itemId,
      name,
      categoryIdNumber,
      description
    );
    res.sendStatus(200)
  }
  
  export async function getAll(req: Request, res: Response) {
    const items = await itemService.findMany();
    console.log(items)
    res.send(items)
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
    await itemService.addToStorage(body.itemId, body.houseId)
    res.sendStatus(201);
}