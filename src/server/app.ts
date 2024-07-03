import cors from 'kcors';
import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import KoaLogger from 'koa-logger';
import Router from 'koa-router';

import { authorize } from '@/modules/auth/authorize';
import { html2pdf } from '@/modules/browser/html2pdf';
import { assert } from '@/utils/assert';

const app = new Koa();

app.use(cors({ origin: '*' }));
app.use(KoaLogger());

app.use(
  BodyParser({
    onerror(err, ctx) {
      ctx.throw(err, 422);
    },
  })
);

app.use(authorize);

const router = new Router();

router.post('/html2pdf', async (ctx) => {
  const body = ctx.request.body as { html: string };
  assert(ctx, body.html, 400, 'HTML is required');
  ctx.body = { pdf: (await html2pdf(body.html)).toJSON() };
  ctx.status = 200;
});

app.use(router.routes());
app.use(router.allowedMethods());

export { app };
