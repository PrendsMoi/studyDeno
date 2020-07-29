/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 说明
 * @FilePath: /demo/todo/handlers/notFound.ts
 * @Date: 2020-07-24 11:27:34
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-29 11:43:15
 */ 
/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 说明
 * @FilePath: /demo/todo/handlers/deleteTodo.ts
 * @Date: 2020-07-24 11:54:14
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-24 16:44:09
 */ 
import { Response } from "https://deno.land/x/oak/mod.ts"

export default ({ response }: {response: Response}) => {
  response.status = 400
  response.body = { msg: 'Not Found' }
}

