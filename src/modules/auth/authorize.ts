import { config } from '@/config';
import { errorMessage } from '@/utils/error-message';
import { Context, Next } from 'koa';

async function authorize(ctx: Context, next: Next) {
  const key = ctx.headers.authorization;

  const isValid = key ? key === config.GITHUB_KEY : false;

  if (!isValid) {
    ctx.status = 401;
    ctx.body = errorMessage('Unauthorized');
    return;
  }

  await next();
}

export { authorize };
