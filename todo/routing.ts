/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 路由 
 * @FilePath: /demo/todo/routing.ts
 * @Date: 2020-07-24 11:24:13
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-24 11:57:16
 */ 
import { Router } from 'https://deno.land/x/oak/mod.ts'

import getTodos from './handlers/getTodos.ts'
import getTodoDetail from './handlers/getTodoDetail.ts'
import createTodo from './handlers/createTodo.ts'
import updateTodo from './handlers/updateTodo.ts'
import deleteTodo from './handlers/deleteTodo.ts'

const router = new Router()

router
  .get('/todos', getTodos)
  .get('/todos/:id', getTodoDetail)
  .post('/todos', createTodo)
  .put('/todos/:id', updateTodo)
  .delete('/todos/:id', deleteTodo)

export default router