/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: 说明
 * @FilePath: /demo/todo/services/util.ts
 * @Date: 2020-07-29 11:58:18
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-29 11:59:13
 */ 

import { v4 as uuid } from 'https://deno.land/std/uuid/mod.ts'

export const createId = () => uuid.generate()
