/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 入口文件 
 * @FilePath: /demo/todo/index.ts
 * @Date: 2020-07-24 11:23:08
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-24 11:30:08
 */ 

import { Application } from 'https://deno.land/x/oak/mod.ts'
import { APP_HOST, APP_PORT } from './config.ts'
import router from './routing.ts'
import NotFound from './handlers/notFound.ts'
import ErrorMiddlewares from './middlewares/error.ts'

const app = new Application()

app.use(ErrorMiddlewares)
app.use(router.routes())
app.use(router.allowedMethods())
app.use(NotFound)

await app.listen(`${APP_HOST}:${APP_PORT}`)


