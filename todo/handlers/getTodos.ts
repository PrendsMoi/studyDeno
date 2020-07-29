/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 说明
 * @FilePath: /demo/todo/handlers/getTodos.ts
 * @Date: 2020-07-24 11:53:27
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-24 15:18:28
 */ 

import { Response } from 'https://deno.land/x/oak/mod.ts'
import { getTodos } from '../services/todo.ts'

export default async ({ response }: { response: Response}) => {
  response.body = await getTodos()
}