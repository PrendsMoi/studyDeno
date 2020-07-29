/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 连接数据库
 * @FilePath: /deno/todo-mysql/db/index.ts
 * @Date: 2020-07-29 16:35:58
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-29 18:07:51
 */ 

import { Client } from 'https://deno.land/x/mysql/mod.ts'
import { DATABASE } from '../config.ts'

const client = new Client()

await client.connect({
  hostname: DATABASE.host,
  username: DATABASE.username,
  password: DATABASE.password,
  db: DATABASE.db,
  debug: true
})

// 创建库
const creatDatabase = async () => {
  // 创建一个数据库
  await client.execute(`CREATE DATABSAE IF NOT EXISTS ${DATABASE.db}`)
  //  选择数据库
  await client.execute(`USE ${DATABASE.db}`)
  // 如果已经创建过名为TODO的数据表。将其删除
  await client.execute(`DROP TABLE IF EXISTS ${DATABASE.table}`)
  // 创建todo数据表
  await client.execute(`
    CREATE TABLE ${DATABASE.table} (
      id int(11) NOT NULL AUTO_INCREMENT,
      todo varchar(100) NOT NULL,
      isCompleted boolean NOT NULL default false,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf-8;
  `)

}

creatDatabase()

// export default client