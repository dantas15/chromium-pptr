import path from 'node:path';

import dotenvSafe from 'dotenv-safe';

const cwd = process.cwd();

const root = path.join.bind(cwd);

dotenvSafe.config({
  path: root('.env'),
  sample: root('.env.example'),
});

const ENV = process.env;

const config = {
  HOST: ENV.HOST ?? '',
  PORT: ENV.PORT ?? 3000,
  GITHUB_KEY: ENV.GITHUB_KEY ?? '',
  CORS_ORIGINS: ENV.CORS_ORIGINS?.split(',') ?? [''],
};

export { config };
