/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: oak 
 * @FilePath: /deno/oak.ts
 * @Date: 2020-07-24 10:36:41
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-29 15:15:26
 */ 

import { Application, Router } from 'https://deno.land/x/oak/mod.ts'

const app = new Application()

const router = new Router()

// Logger

app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.headers.get('X-Respones-Time')
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`)
})

// Timing
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.response.headers.set('X-Respones-Time', `${ms}ms`)
})

router
  .get('/', context => {
    context.response.body = '/'
  })
  .get('/text', context => {
    context.response.body = '/text'
  })

app.use(router.routes())


app.use(router.allowedMethods())

app.use(ctx => {
  ctx.response.body = '404'
})

await app.listen({port: 9888})

