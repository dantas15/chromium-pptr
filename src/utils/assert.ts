import { Context } from 'koa';

export function assert(
  context: Context,
  value: any,
  statusCode: number,
  errorMessage: string
) {
  context.assert(value, statusCode, JSON.stringify({ error: errorMessage }));
}
