import { FastifyPluginCallback } from 'fastify';
import z from 'zod';

import { defineGet } from '@/kernel/define-get';

export const internal: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/greeting', defineGet({
    paramsDef: z.object({}),
    queryDef: z.object({
      name: z.string().max(20),
      age: z.coerce.number(),
    }),
    requireToken: false,
    run(opts) {
      return {
        message: `こんにちは、${opts.query.age}歳の${opts.query.name}さん。`,
      };
    },
  }));
  done();
};
