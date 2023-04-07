import { FastifyPluginCallback } from 'fastify';
import z from 'zod';

import { defineGet } from '@/kernel/define-get';
import { fetchInstanceV2 } from '@/services/fetch-instance';

export const apiV2: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/instance', defineGet({
    paramsDef: z.object({}),
    queryDef: z.object({}),
    requireToken: false,
    run() {
      return fetchInstanceV2();
    },
  }));
  done();
};
