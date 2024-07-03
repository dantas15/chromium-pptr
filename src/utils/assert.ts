import { Context } from 'koa';

import { errorMessage as error } from './error-message';

export function assert(
  context: Context,
  value: any,
  statusCode: number,
  errorMessage: string
) {
  context.assert(value, statusCode, error(errorMessage));
}
