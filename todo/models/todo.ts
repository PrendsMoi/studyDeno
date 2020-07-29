/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 模型
 * @FilePath: /deno/todo/models/todo.ts
 * @Date: 2020-07-24 11:50:35
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-29 15:14:53
 */ 
export interface Todo {
  id: string,
  userId?: number,
  title: string,
  completed: boolean
}
