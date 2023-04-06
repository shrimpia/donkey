import { readFileSync } from 'fs';

export type Config = {
  host: string;
  port: number;
  misskey: {
    url: string;
  };
};

const getConfig = (): Config => {
  return JSON.parse(readFileSync(__dirname + '/../config.json', 'utf-8'));
};

export const config = getConfig();
