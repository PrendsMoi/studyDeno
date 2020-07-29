/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 404
 * @FilePath: /deno/todo/handlers/notFound.ts
 * @Date: 2020-07-24 11:27:34
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-29 15:13:47
 */ 
import { Response } from "https://deno.land/x/oak/mod.ts"

export default ({ response }: {response: Response}) => {
  response.status = 400
  response.body = { msg: 'Not Found' }
}

