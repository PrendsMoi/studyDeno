/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 删除todo
 * @FilePath: /deno/todo/handlers/deleteTodo.ts
 * @Date: 2020-07-24 11:54:14
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-29 15:14:24
 */ 
import { Response, RouteParams } from "https://deno.land/x/oak/mod.ts"
import { deleteTodo, getTodo } from "../services/todo.ts"

export default async ({
  params,
  response
}: {
  params: RouteParams
  response: Response
}) => {
  const todoId = params.id

  if (!todoId) {
    response.status = 400
    response.body = { msg: "Invalid todo id" }
    return
  }

  const foundTodo = await getTodo(todoId)
  if (!foundTodo) {
    response.status = 404
    response.body = { msg: `Todo with ID ${todoId} not found` }
    return
  }

  await deleteTodo(todoId)
  response.body = { msg: "Todo deleted" }
}