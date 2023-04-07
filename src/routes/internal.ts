import { FastifyPluginCallback } from 'fastify';
import { defineGet } from '@/kernel/define-get';
import z from 'zod';

export const internal: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get(
    '/greeting',
    defineGet({
      paramsDef: z.object({}),
      queryDef: z.object({
        name: z.string().max(20),
        age: z.coerce.number(),
      }),
      run(params, query) {
        return {
          message: `こんにちは、${query.age}歳の${query.name}さん。`,
        };
      },
    }),
  );
  done();
};
