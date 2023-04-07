import { FastifyPluginCallback } from 'fastify';
import { getInstance } from '@/controllers/api/v1/instance';
import { postApps } from '@/controllers/api/v1/apps';

export const apiV1: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/instance', getInstance);

  fastify.get('/apps/:test', postApps);
  done();
};
