import { RouteHandlerMethod } from 'fastify';
import { fetchInstanceV1 } from 'src/services/fetch-instance';

export const getInstance: RouteHandlerMethod = async () => {
  return fetchInstanceV1();
};
