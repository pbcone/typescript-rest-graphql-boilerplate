import { Request, Response, Router } from 'express';
import { fooController } from './foo/rest/foo_controller';
import { getLogger } from './logger';

const logger = getLogger();

export const router = Router()
  .get('/health', (req: Request, res: Response) => {
    logger.debug(`/health`);
    res.status(200).send('healthy');
  })
  .get('/live', (req: Request, res: Response) => {
    logger.debug(`/live`);
    res.status(200).send('alive');
  })
  .use('/rest', Router().use('/foo', fooController));
