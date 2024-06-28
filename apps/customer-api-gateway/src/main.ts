import { default as httpProxy } from '@fastify/http-proxy';
import Fastify from 'fastify';
import { app } from './app/app';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// Instantiate Fastify with some config
const server = Fastify({
  logger: true,
});

// Register your application as a normal plugin.
server.register(app);

const registerProxyEndpoints = registerProxyEndpointsFor(server);

const productService = 'http://localhost:3010';
const userService = 'http://localhost:3020';

registerProxyEndpoints(productService, [
  '/api/v1/categories',
  '/api/v1/products',
]);
registerProxyEndpoints(userService, ['/api/v1/users', '/api/v1/auth']);

function registerProxyEndpointsFor(server: ReturnType<typeof Fastify>) {
  return (serviceUrl: string, endpoints: string[]) => {
    for (const endpoint of endpoints) {
      server.register(httpProxy, {
        upstream: serviceUrl,
        prefix: endpoint,
        rewritePrefix: endpoint,
      });
    }
  };
}

// Start listening.
server.listen({ port, host }, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  } else {
    console.log(`[ ready ] http://${host}:${port}`);
  }
});
