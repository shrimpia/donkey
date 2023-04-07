import { FastifyPluginCallback } from 'fastify';
import z from 'zod';

import { defineGet } from '@/kernel/define-get';
import { definePost } from '@/kernel/define-post';
import { fetchInstanceV1 } from '@/services/fetch-instance';

export const apiV1: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/instance', defineGet({
    paramsDef: z.object({}),
    queryDef: z.object({}),
    requireToken: false,
    run() {
      return fetchInstanceV1();
    },
  }));

  fastify.get('/apps/:test', definePost({
    paramsDef: z.object({}),
    bodyDef: z.object({
      client_name: z.string(),
      redirect_uris: z.string(),
      scopes: z.string().default('read'),
      website: z.string().optional(),
    }),
    requireToken: false,
    run() {
      throw new Error('notimpl');
    },
  }));
  done();
};
