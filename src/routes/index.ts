import { FastifyPluginCallback } from 'fastify';
import { apiV1 } from '@/routes/api/v1';
import { apiV2 } from '@/routes/api/v2';
import { oauth } from '@/routes/api/oauth';

export const routes: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.register(apiV1, { prefix: '/api/v1' });
  fastify.register(apiV2, { prefix: '/api/v2' });
  fastify.register(oauth, { prefix: '/oauth' });
  done();
};
