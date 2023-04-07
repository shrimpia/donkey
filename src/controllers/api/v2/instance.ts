import { fetchInstanceV2 } from '@/services/fetch-instance';
import { defineGet } from '@/kernel/define-get';
import z from 'zod';

export const getInstance = defineGet({
  paramsDef: z.object({}),
  queryDef: z.object({}),
  run() {
    return fetchInstanceV2();
  },
});
