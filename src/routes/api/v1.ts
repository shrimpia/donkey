import { FastifyPluginCallback } from 'fastify';
import { getInstance } from '@/controllers/api/v1/instance';

export const apiV1: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/instance', getInstance);
  done();
};
