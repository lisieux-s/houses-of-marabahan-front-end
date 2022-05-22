import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import 'express-async-errors';

import router from './routers/index.js';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';

import { prisma } from './database.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandlerMiddleware);

app.get('/create-kinds', async (req, res) => {
  await prisma.kind.createMany({
    data: [
      {
        name: 'clayfeet',
        description: 'Elusive shapeshifters molded out of clay.',
      },
      {
        name: 'paladi',
        description: 'Proud children of the goddess Palos.',
      },
      {
        name: 'flowerbud',
        description: 'Photosynthetic creations of the goddess Aman.',
      },
      {
        name: 'merperson',
        description:
          'Mysterious creatures that emerged from the unforgiving Ilié.',
      },
      {
        name: 'mogami',
        description:
          'Ceramic vessels that were guarded by dragons for 400 seasons.',
      },
      {
        name: 'moonlit',
        description: 'Servants of the Lunar Goddesses.',
      },
      {
        name: 'blue folk',
        description:
          'The fierce and boisterous kind created by the goddess Maimu.',
      },
      {
        name: 'blaoru',
        description:
          'Forged from the fires of the Underworld, this kind is said to give the best hugs.',
      },

      {
        name: 'baego',
        description: `Assembled themselves from the spare pieces of the gods' creations.`,
      },
      {
        name: 'revenant',
        description: 'Vengeful spirits of the dead.',
      },
    ],
  });
  res.sendStatus(201)
});

export default app;
