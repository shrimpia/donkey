import { api } from 'misskey-js';

import { config } from '@/config';

export const misskey = new api.APIClient({
  origin: config.misskey.url,
});
