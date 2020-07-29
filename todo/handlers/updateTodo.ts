/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 更新todo
 * @FilePath: /deno/todo/handlers/updateTodo.ts
 * @Date: 2020-07-24 11:54:01
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-29 15:13:28
 */ 
import { Response, RouteParams } from 'https://deno.land/x/oak/mod.ts'
import { updateTodo } from '../services/todo.ts'
import { Todo } from '../models/todo.ts'

export default async ({
  params,
  request,
  response
} : {
  params: RouteParams,
  request: any,
  response: Response
}) => {
  const todoId = params.id
  
  if (!todoId) {
    response.status = 400
    response.body = { msg: 'Invalid todo id' }
    return
  }

  if (!request.hasBody()) {
    response.status = 400
    response.body = { msg: 'Invalid todo data' }    
    return
  }

  const body = await request.body()

  const { userId, title, completed = false }: Todo = body.value

  await updateTodo(todoId, { userId, title, completed })
  response.body = { msg: 'Todo updated' }
}