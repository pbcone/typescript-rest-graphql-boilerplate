import { Request, Response } from 'express';
import { Router } from 'express';
import { FooService } from './foo_service';
import { getLogger } from '../../logger';

const fooService = FooService.getInstance();
const logger = getLogger();

export const fooController = Router()
  .get('', (req: Request, res: Response) => res.send('Foo'))
  .get('/ping', async (req: Request, res: Response) => {
    logger.debug('/foo/ping');
    try {
      res.send(await fooService.ping());
    } catch (e) {
      res.status(500).send('ERROR');
    }
    return;
  });
