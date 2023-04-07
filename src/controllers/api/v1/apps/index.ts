import z from 'zod';
import { definePost } from '@/kernel/define-post';

export const postApps = definePost({
  paramsDef: z.object({}),
  bodyDef: z.object({}),
  run(params, body, req, res) {
    throw new Error('notimpl');
  },
});
