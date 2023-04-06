import fastify from 'fastify';
import { routes } from '@/routes';
import { config } from './config';

const app = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
    },
  },
});

app.register(routes);

app
  .listen({ port: Number(config.port ?? '3000'), host: '0.0.0.0' })
  .catch((err) => {
    fastify.log.error(err);
    process.exit(-1);
  });
