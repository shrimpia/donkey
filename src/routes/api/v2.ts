import { FastifyPluginCallback } from 'fastify';
import { getInstance } from '@/controllers/api/v2/instance';

export const apiV2: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/instance', getInstance);
  done();
};
