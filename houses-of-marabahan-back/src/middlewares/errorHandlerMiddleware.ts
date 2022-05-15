import { Request, Response, NextFunction } from 'express';

import { isAppError, AppError, typeToStatusCode } from '../utils/errorUtils.js';

export function errorHandlerMiddleware(error: Error | AppError, req: Request, res: Response, next: NextFunction) {
  console.log(error);
  if (isAppError(error))
    return res.status(typeToStatusCode(error.type)).send(error.message);
  return res.sendStatus(500);
}
