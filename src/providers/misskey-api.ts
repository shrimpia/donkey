import { FactoryProvider } from '@nestjs/common';
import { api } from 'misskey-js';
import { DI } from 'src/const';

export const misskeyApiProvider: FactoryProvider = {
  provide: DI.MISSKEY,
  useFactory: () => {
    if (!process.env.MISSKEY_HOST) throw new Error('env MISSKEY_HOST is null');
    const client = new api.APIClient({
      origin: process.env.MISSKEY_HOST,
    });
    return client;
  },
};
