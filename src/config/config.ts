import fs from 'fs';
import YAML from 'yaml';

export interface ServerConfig {
  isProduciton: boolean;
  table: string;
  serverPort: number;
}

export const getConfig = (): ServerConfig => {
  const env = process.env.NODE_ENV || '';
  let file;
  if (env === 'production') {
    file = fs.readFileSync('./src/config/production.yml', 'utf8');
  } else if (env === 'staging') {
    file = fs.readFileSync('./src/config/staging.yml', 'utf8');
  } else {
    file = fs.readFileSync('./src/config/development.yml', 'utf8');
  }
  const configParsed = YAML.parse(file);
  const resultConfig: ServerConfig = configParsed;

  return resultConfig;
};
