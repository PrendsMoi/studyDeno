/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 异常处理
 * @FilePath: /deno/todo/middlewares/error.ts
 * @Date: 2020-07-24 11:28:14
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-29 15:14:44
 */ 
import { Response } from 'https://deno.land/x/oak/mod.ts'

export default async (
  { response }: { response: Response },
  next: () => Promise<void>
) => {
  try {
    await next()
  } catch (err) {
    response.status = 500
    response.body = { msg: err.message }
  }
}