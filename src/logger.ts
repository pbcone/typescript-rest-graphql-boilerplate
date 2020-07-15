import winston from 'winston';

const defaultLoggerConfig = {
  level: 'debug',
  format: winston.format.prettyPrint(),
  defaultMeta: { service: 'foo-service' },
  transports: [new winston.transports.Console({})],
};

const productionLoggerConfig = {
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'foo-service' },
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
};

export const getLogger = (): winston.Logger =>
  winston.createLogger(process.env.NODE_ENV === 'production' ? productionLoggerConfig : defaultLoggerConfig);
