/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 生成id
 * @FilePath: /deno/todo/services/util.ts
 * @Date: 2020-07-29 11:58:18
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-29 15:12:50
 */ 

import { v4 as uuid } from 'https://deno.land/std/uuid/mod.ts'

export const createId = () => uuid.generate()
