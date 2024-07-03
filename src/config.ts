import path from 'node:path';

import dotenvSafe from 'dotenv-safe';

const cwd = process.cwd();

const root = path.join.bind(cwd);

const envFilename =
  process.env.NODE_ENV === 'production' ? '.env.production' : '.env';

dotenvSafe.config({
  path: root(envFilename),
  sample: root('.env.example'),
});

const ENV = process.env;

const config = {
  HOST: ENV.HOST ?? '',
  PORT: ENV.PORT ?? 3000,
  GITHUB_KEY: ENV.GITHUB_KEY ?? '',
  CORS_ORIGIN: ENV.CORS_ORIGIN ?? '',
};

export { config };
