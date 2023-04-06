import { RouteHandlerMethod } from 'fastify';
import { fetchInstanceV2 } from 'src/services/fetch-instance';

export const getInstance: RouteHandlerMethod = async () => {
  return fetchInstanceV2();
};
