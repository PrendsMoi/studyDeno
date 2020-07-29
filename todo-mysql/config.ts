/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 配置文件  
 * @FilePath: /deno/todo-mysql/config.ts
 * @Date: 2020-07-24 11:22:32
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-29 17:19:31
 */ 

// Deno.env等同于Node的process.env
const env = Deno.env.toObject()

export const APP_HOST = env.APP_HOST || '127.0.0.1'
export const APP_PORT = env.APP_PORT || 3000

// 数据库
export const DATABASE = {
  host: '127.0.0.1',
  port: '3306',
  username: 'root',
  password: '',
  db: 'deno',
  table: 'todo'
}