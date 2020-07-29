/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 说明
 * @FilePath: /demo/todo/handlers/getTodoDetail.ts
 * @Date: 2020-07-24 11:53:39
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-24 15:22:39
 */ 
import { Response, RouteParams } from 'https://deno.land/x/oak/mod.ts'
import { getTodo } from '../services/todo.ts'

export default async ({ 
  params,
  response 
}: {
  params: RouteParams,
  response: Response
}) => {
  const todoId = params.id
  if (!todoId) {
    response.status = 400
    response.body = { msg: 'Invalid todo id' }
    return
  }
  const foundedTodo = await getTodo(todoId)
  if (!foundedTodo) {
    response.status = 404
    response.body = { msg: `Todo with ID ${todoId} not found` }
    return
  }
  response.body = foundedTodo
}