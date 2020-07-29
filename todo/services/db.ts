/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 说明
 * @FilePath: /demo/todo/services/db.ts
 * @Date: 2020-07-29 11:59:32
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-29 14:54:40
 */
import { DB_PATH } from '../config.ts'
import { Todo } from '../models/todo.ts'

export const fetchData = async (): Promise<Todo[]> => {
  const data = await Deno.readFile(DB_PATH)
  const decoder = new TextDecoder()
  const decodedData = data.length > 0 ? decoder.decode(data) : '[]'
  return JSON.parse(decodedData)
}

export const persistData = async (data: Todo[]): Promise<void> => {
  const encoder = new TextEncoder()
  await Deno.writeFile(DB_PATH, encoder.encode(JSON.stringify(data)))
}
