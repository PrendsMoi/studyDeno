/*
 * @Author: Arvin
 * @GitHub: https://github.com/973749104
 * @Blog: https://liuhgxu.com
 * @Description: deno hello word
 * @FilePath: /demo/demo.ts
 * @Date: 2020-05-21 13:39:13
 * @LastEditors: Arvin
 * @LastEditTime: 2020-07-23 17:38:50
 */ 

import { serve, Server } from 'https://deno.land/std/http/server.ts'

const server: Server = serve({ 
  port: 9000
})

console.log('http://localhost:9000')

for await (const req of server) {
  req.respond({
    body: '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>你好</html>'
  })
}