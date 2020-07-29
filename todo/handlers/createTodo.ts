/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 说明
 * @FilePath: /demo/todo/handlers/createTodo.ts
 * @Date: 2020-07-24 11:53:50
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-29 14:21:45
 */ 
import { Response } from 'https://deno.land/x/oak/mod.ts'
import { createTodo } from '../services/todo.ts'
import { Todo } from '../models/todo.ts'

export default async ({
  request,
  response
}: {
  request: any
  response: Response
}) => {
  if (!request.hasBody) {
    response.status = 400
    response.body = { msg: 'Invalid todo data' }
    return
  }

  const body = request.body()

  const { userId, title, completed = false }: Todo = await body.value

  if (!userId || !title) {
    response.status = 422
    response.body = { msg: 'Incorrect todo data. userId and title are required' }
    return
  }

  const todoId = await createTodo({userId, title, completed})
  response.body = {
    msg: 'Todo created',
    todoId
  }
}